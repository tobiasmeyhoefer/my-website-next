import NextAuth from "next-auth"
import { authConfig } from "./auth.config"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
// import bcrypt from "bcrypt"
import { connectToDb } from "./app/lib/connectToDb"
import { User } from "./app/lib/models"

type UserType = {
  name: string,
  password: string
}

//connect here with mongodb
async function getData(password: string): Promise<UserType | undefined>{
  console.log("test")
  try {
    connectToDb()
    let users = await User.find()
    let user = users[0]
    console.log(users)
    return user

    // const user = await sql<User>`SELECT * FROM users WHERE name=${name}`
    // return user.rows[0]
  } catch (error) {
    console.error("Failed to fetch user:", error)
    throw new Error("Failed to fetch user.")
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z.object({ password: z.string().min(6) }).safeParse(credentials)

        if (parsedCredentials.success) {
          const { password } = parsedCredentials.data
          const user = await getData(password)
          if (!user) return null
          // const passwordsMatch = await bcrypt.compare(password, user.password);
          if (password === user.password) {
            return user;
          }
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
})
