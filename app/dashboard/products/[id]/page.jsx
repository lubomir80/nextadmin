import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

function SingleProductPage() {
   return (
      <div className={styles.container}>
         <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
               <Image src="/noavatar.png" alt="" fill />
            </div>
            <p>Product</p>
         </div>
         <div className={styles.formContainer}>
            <form action="" className={styles.form}>
               <label>Title</label>
               <input type="text" placeholder="Product title" name="title" required />

               <label>Category</label>
               <select name="cat" id="cat">
                  <option value="kitchen">Kitchen</option>
                  <option value="phone">Phone</option>
                  <option value="computers">Computers</option>
               </select>

               <label>Price</label>
               <input type="number" placeholder="50$" name="price" required />
               <label>Stock</label>
               <input type="number" name="stock" placeholder="15" required />
               <label>Color</label>
               <input type="text" placeholder="green" name="color" required />
               <label>Size</label>
               <input type="text" placeholder="Large" name="size" required />

               <label>Description</label>
               <textarea
                  name="desc"
                  id="desc"
                  placeholder="description"
                  rows="10">
               </textarea>

               <button type="submit">Update</button>
            </form>
         </div>
      </div>
   )
}

export default SingleProductPage