import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import { updateProduct } from "@/libs/actions";
import { fetchProduct } from "@/libs/data";
import Image from "next/image"

async function SingleProductPage({ params }) {
   const { id } = params;
   const product = await fetchProduct(id)


   return (
      <div className={styles.container}>
         <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
               <Image src={product.img || "/noavatar.png"} alt="" fill />
            </div>
            <p>{product.title}</p>
         </div>
         <div className={styles.formContainer}>
            <form action={updateProduct} className={styles.form}>
               <input type="hidden" name="id" value={product.id} />
               <label>Title</label>
               <input type="text" placeholder={product.title} name="title" required />

               <label>Category</label>
               <select name="cat" id="cat">
                  <option value="kitchen">Kitchen</option>
                  <option value="phone">Phone</option>
                  <option value="computers">Computers</option>
                  <option value="computers">Sport</option>
               </select>

               <label>Price</label>
               <input type="number" placeholder={product.price} name="price" required />
               <label>Stock</label>
               <input type="number" name="stock" placeholder={product.stock} required />
               <label>Color</label>
               <input type="text" placeholder={product.color} name="color" required />
               <label>Size</label>
               <input type="text" placeholder={product.size} name="size" required />

               <label>Description</label>
               <textarea
                  name="desc"
                  id="desc"
                  placeholder={product.desc}
                  rows="10">
               </textarea>

               <button type="submit">Update</button>
            </form>
         </div>
      </div>
   )
}

export default SingleProductPage