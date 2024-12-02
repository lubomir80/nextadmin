import mongoose from "mongoose";

const { model, models, Schema } = mongoose


const userSchema = new Schema({
   username: {
      type: String,
      require: true,
      unique: true,
      min: 3,
      max: 20,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   img: {
      type: String,
   },
   isAdmin: {
      type: Boolean,
      default: false,
   },
   isActive: {
      type: Boolean,
      default: true,
   },
   phone: {
      type: String,
   },
   address: {
      type: String,
   },
}, { timestamps: true })

const productSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         unique: true,
      },
      desc: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
         min: 0,
      },
      stock: {
         type: Number,
         required: true,
         min: 0,
      },
      img: {
         type: String,
      },
      color: {
         type: String,
      },
      size: {
         type: String,
      },
   },
   { timestamps: true }
);

export const User = models.user || model("user", userSchema);
export const Product = models.product || model("product", productSchema)
