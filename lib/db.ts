'use server'

import mongoose, { ConnectOptions } from "mongoose"


if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI as string

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            // useUnifiedTopology: true,
            // useNewUrlParser: true,
            dbName: 'Gratify'
        } as ConnectOptions)
        console.log('mongo connected')
    } catch (err) {
        console.log(err)
    }
}

const disconnectDB = async() => {
   try{
        await mongoose.disconnect()
        console.log("mongoose disconnected")
   }catch(err){
      console.log("there's an error could'nt disconnect db")
   }

}

export { connectDB, disconnectDB }