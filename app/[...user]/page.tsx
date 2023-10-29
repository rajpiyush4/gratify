import { checkAuth } from "@/actions/checkAuth";
import { redirect } from "next/navigation";
import Profile from "@/components/Profile";
import AddPost from "@/components/AddPost"

const page = async({params}:{params:{user:string[]}}) =>{
    const {user: [name]} = params
    const user = await checkAuth() 
    if(!user){
        redirect('/api/auth/signin')
    }
    
    //show my profile and posts
    return(
        <>
          <Profile username ={name}/>
          <AddPost/>
          
        </>
    )



    
}

export default page