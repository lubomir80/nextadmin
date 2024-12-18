"use server"
import { User, Product } from "./models";
import connectMongoDB from "./mongodb";


export const fetchUsers = async (q, page) => {
   const regex = new RegExp(q, "i")

   const ITEM_PER_PAGE = 2;

   try {
      connectMongoDB()
      const count = await User.find({ username: { $regex: regex } }).countDocuments()
      const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))
      return { users, count }

   } catch (err) {
      console.log(err);
      throw new Error("Failed fetch data Users")
   }
}

export const fetchUser = async (id) => {
   try {
      connectMongoDB()
      const user = await User.findById(id)
      return user

   } catch (err) {
      console.log(err);
      throw new Error("Failed fetch data User")
   }
}



export const fetchProducts = async (q, page) => {
   const regex = new RegExp(q, "i")

   const ITEM_PER_PAGE = 2;

   try {
      connectMongoDB()
      const count = await Product.find({ title: { $regex: regex } }).countDocuments()
      const products = await Product.find({ title: { $regex: regex } })
         .limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))
      return { products, count }

   } catch (err) {
      console.log(err);
      throw new Error("Failed fetch data Products")
   }
}

export const fetchProduct = async (id) => {
   try {
      connectMongoDB()
      const product = await Product.findById(id)
      return product

   } catch (err) {
      console.log(err);
      throw new Error("Failed fetch data Product")
   }
}