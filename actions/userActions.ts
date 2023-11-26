'use server'
import User from "@/models/users"
import { checkAuth } from "./checkAuth"
import {ObjectId} from 'mongodb'

export const getUserByUsername = async (username: string) => {
    try {
        const user = await User.findOne({ username })
        return user;

    }catch(err){
        console.log(err)
    }
}
export const getUserById = async (id: string) => {
    try {
        const user = await User.findOne({ _id: id })
        return user;

    }catch(err){
        console.log(err)
    }
}

export const getUserByEmail =async () => {
    const user = await checkAuth()
    if(!user) return Error('no user exists');
    
    try{
        const userDB = await User.findOne({email: user?.email})
        return userDB
    }catch(err){
        console.log(err)
    }

}

export const getUsers = async () =>{
    try{
        const users = await User.find()
        return users
    }catch(err){
        console.log(err)
    }

}

export const blockUser = async ()=>{
    
}

