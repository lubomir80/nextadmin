import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import UserItem from "@/app/ui/dashboard/users/userItem/userItem"
import styles from "@/app/ui/dashboard/users/users.module.css"
import { fetchUsers } from "@/libs/data"
import Link from "next/link"


async function UsersPage() {
   const users = await fetchUsers()


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
               {users.map((user) => <UserItem user={user} key={user.id} />
               )}
            </tbody>
         </table>
         <Pagination />
      </div >
   )
}

export default UsersPage