"use client"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"
import { lastValueFromPathName } from "@/app/helpers/helpers"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"



function Navbar() {
   const pathName = usePathname()

   return (
      <div className={styles.container}>
         <div className={styles.title}>
            {lastValueFromPathName(pathName)}
         </div>
         <div className={styles.menu}>
            <div className={styles.search}>
               <MdSearch />
               <input type="text" placeholder="search" className={styles.input} />
            </div>
            <div className={styles.icons}>
               <MdNotifications size={20} />
               <MdOutlineChat size={20} />
               <MdPublic size={20} />
            </div>
         </div>
      </div>
   )
}

export default Navbar