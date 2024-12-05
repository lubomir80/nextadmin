"use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import connectMongoDB from "./mongodb";


export const addUser = async (formData) => {
   const { username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);

   try {
      connectMongoDB()

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
         username,
         email,
         password: hashedPassword,
         phone,
         address,
         isAdmin,
         isActive,
      });

      await newUser.save();
   } catch (error) {
      console.log(error);
      throw new Error("Failed to create user!");
   }

   revalidatePath("/dashboard/users");
   redirect("/dashboard/users");
};


export const addProduct = async (formData) => {
   const { title, price, stock, color, size, desc } =
      Object.fromEntries(formData);

   try {
      connectMongoDB()

      const newUser = new Product({
         title,
         price,
         stock,
         color,
         size,
         desc
      });

      await newUser.save();
   } catch (error) {
      console.log(error);
      throw new Error("Failed to create user!");
   }

   revalidatePath("/dashboard/products");
   redirect("/dashboard/products");
};