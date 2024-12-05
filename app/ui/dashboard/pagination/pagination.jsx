"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './pagination.module.css'

function Pagination({ count }) {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const { replace } = useRouter();

   const page = searchParams.get("page") || 1;

   const params = new URLSearchParams(searchParams)
   const ITEM_PRE_PAGE = 2

   const hasPrev = ITEM_PRE_PAGE * (parseInt(page) - 1) > 0
   const hasNext = ITEM_PRE_PAGE * (parseInt(page) - 1) + ITEM_PRE_PAGE < count


   const handlerChangePage = (type) => {
      type === "prev"
         ? params.set("page", parseInt(page) - 1)
         : params.set("page", parseInt(page) + 1)
      replace(`${[pathname]}?${params}`)
   }




   return (
      <div className={styles.container}>
         <button className={styles.button} onClick={() => handlerChangePage("prev")} disabled={!hasPrev}>Prev</button>
         <button className={styles.button} onClick={() => handlerChangePage("next")} disabled={!hasNext}>Next</button>
      </div>
   )
}

export default Pagination