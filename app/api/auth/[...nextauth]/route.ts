import { connectDB } from "@/lib/db"
import NextAuth, {AuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import User from '@/models/users'

type Profile={
  sub?: string
  name?: string
  email?: string
  image?: string
  picture?: string

}

export const authOptions: AuthOptions = ({
    session:{
        strategy:'jwt'
    },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {

    async jwt({ token }) {
      return token
    },

    async session({ session }) {
      return session
    },

    async signIn({profile}:{profile?:Profile|undefined}) {
      try {
        await connectDB();
        const userExist = await User.findOne({ email: profile?.email })

        if (!userExist){
          const user = await User.create({
            name: profile?.name,
            email: profile?.email,
            profileImg: profile?.picture,
            bio: "I'm a person",
          })
          
        }

        return true
      }
      catch (err) {
        console.log("err", err);
        return false
      }
    }

  
  }
})

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }