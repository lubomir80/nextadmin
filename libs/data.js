"use server"
import { User } from "./models";
import connectMongoDB from "./mongodb";


export const fetchUsers = async (q) => {
   const regex = new RegExp(q, "i")

   try {
      connectMongoDB();
      const data = await User.find({ username: regex })
      return data

   } catch (err) {
      console.log(err);
      throw new Error("Failed fetch data Users")

   }
}