import { checkAuth } from "@/actions/checkAuth";
import { redirect } from "next/navigation";
import Profile from "@/components/Profile";
import ProfilePost from "@/components/ProfilePost"

const page = async({params}:{params:{user:string}}) =>{
    const {user: name} = params    //exposed to bug cause of destructuring
    const check = await checkAuth() 
    if(!check){
        redirect('/api/auth/signin')
    }

    //show my profile and posts
    return(
        <section className="h-screen flex">
          <Profile username={name} />
          <ProfilePost username ={name} />
        </section>
    )



    
}

export default page