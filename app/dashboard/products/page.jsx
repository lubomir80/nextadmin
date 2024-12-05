import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import Link from "next/link"
import styles from "@/app/ui/dashboard/products/products.module.css"
import { fetchProducts } from "@/libs/data"
import ProductItem from "@/app/ui/dashboard/products/productItem/productItem"

async function ProductsPage({ searchParams }) {
   const q = searchParams?.q || ""
   const page = searchParams?.page || ""
   const { products, count } = await fetchProducts(q, page)



   return (
      <div className={styles.container}>
         <div className={styles.top}>
            <Search placeholder="Search for a product..." />
            <Link href="/dashboard/products/add">
               <button className={styles.addButton}>Add New</button>
            </Link>
         </div>
         <table className={styles.table}>
            <thead>
               <tr>
                  <td>Title</td>
                  <td>Description</td>
                  <td>Price</td>
                  <td>Created at</td>
                  <td>Stock</td>
                  <td>Action</td>
               </tr>
            </thead>

            <tbody>
               {products?.map((product) =>
                  <ProductItem key={product.id} products={product} />)}
            </tbody>
         </table>
         <Pagination count={count} />
      </div>
   )
}

export default ProductsPage