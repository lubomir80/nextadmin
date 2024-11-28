"use client"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/users/users.module.css"
import Image from "next/image"
import Link from "next/link"


function UsersPage() {
   return (
      <div className={styles.container}>
         <div className={styles.top}>
            <Search placeholder="Search for a user..." />
            <Link href="/dashboard/users/add">
               <button className={styles.addButton}>Add user</button>
            </Link>
         </div>
         <table className={styles.table}>
            <thead>
               <tr>
                  <td>User</td>
                  <td>Email</td>
                  <td>Created at</td>
                  <td>Role</td>
                  <td>Status</td>
                  <td>Action</td>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <td>
                     <div className={styles.user}>
                        <Image src="/noavatar.png"
                           alt=''
                           width={40}
                           height={40}
                           className={styles.userImg}
                        />
                        Hello1
                     </div>
                  </td>
                  <td>Hello1@gmail.com</td>
                  <td>12.02.2024</td>
                  <td>Admin</td>
                  <td>active</td>
                  <td>
                     <div className={styles.buttons}>
                        <Link href="/dashboard/users/tests">
                           <button className={`${styles.button} ${styles.view}`}>View</button>
                        </Link>
                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className={styles.user}>
                        <Image src="/noavatar.png"
                           alt=''
                           width={40}
                           height={40}
                           className={styles.userImg}
                        />
                        Hello2
                     </div>
                  </td>
                  <td>Hello2@gmail.com</td>
                  <td>12.05.2024</td>
                  <td>Admin</td>
                  <td>active</td>
                  <td>
                     <div className={styles.buttons}>
                        <Link href="/dashboard/users/test">
                           <button className={`${styles.button} ${styles.view}`}>View</button>
                        </Link>
                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div className={styles.user}>
                        <Image src="/noavatar.png"
                           alt=''
                           width={40}
                           height={40}
                           className={styles.userImg}
                        />
                        Hello3
                     </div>
                  </td>
                  <td>Hello3@gmail.com</td>
                  <td>05.02.2024</td>
                  <td>Admin</td>
                  <td>active</td>
                  <td>
                     <div className={styles.buttons}>
                        <Link href="/">
                           <button className={`${styles.button} ${styles.view}`}>View</button>
                        </Link>
                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
         <Pagination />
      </div>
   )
}

export default UsersPage