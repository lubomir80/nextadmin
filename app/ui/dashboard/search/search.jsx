"use client"
import styles from "./search.module.css"
import { MdSearch } from "react-icons/md"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';

function Search({ placeholder }) {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const { replace } = useRouter();



   const handlerSearch = useDebouncedCallback((e) => {
      const { value } = e.target;
      const params = new URLSearchParams(searchParams)

      if (value) {
         value.length > 2 && params.set("q", value)
      } else {
         params.delete("q")
      }
      replace(`${pathname}?${params}`)
   }, 300)

   return (
      <div className={styles.container}>
         <MdSearch />
         <input
            className={styles.input}
            type="text"
            onChange={handlerSearch}
            placeholder={placeholder}
         />
      </div>
   )
}

export default Search