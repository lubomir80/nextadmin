"use server"


import { User } from "./models";
import connectMongoDB from "./mongodb";


export const fetchUsers = async () => {
   try {
      connectMongoDB();
      const data = await User.find()
      return data

   } catch (err) {
      console.log(err);
      throw new Error("Failed fetch data Users")

   }
}