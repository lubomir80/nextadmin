import styles from "@/app/ui/dashboard/products/products.module.css"
import Image from "next/image"
import Link from "next/link"

function ProductItem({ products }) {
   const { id, title, desc, img, price, createdAt, stock, size, color } = products


   return (
      <tr>
         <td>
            <div className={styles.product}>
               <Image src={img || "/noproduct.jpg"}
                  alt={title}
                  width={40}
                  height={40}
                  className={styles.productImg}
               />
               {title}
            </div>
         </td>
         <td>{desc?.slice(0, 50)}</td>
         <td>${price}</td>
         <td>{createdAt?.toString().slice(4, 16)}</td>
         <td>{stock}</td>
         <td>
            <div className={styles.buttons}>
               <Link href={`/dashboard/products/${id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
               </Link>
               <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </div>
         </td>
      </tr>
   )
}

export default ProductItem