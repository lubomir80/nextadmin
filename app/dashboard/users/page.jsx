import { unstable_noStore as noStore } from 'next/cache';
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from "next/link"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import Search from "@/app/ui/dashboard/search/search"
import UserItem from "@/app/ui/dashboard/users/userItem/userItem"
import { fetchUsers } from "@/libs/data"


async function UsersPage({ searchParams }) {
   noStore();
   const q = searchParams?.q || ""
   const page = searchParams?.page || 1
   const { users, count } = await fetchUsers(q, page)



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
               {users?.map((user) => <UserItem user={user} key={user.id} />
               )}
            </tbody>
         </table>
         <Pagination count={count} />
      </div >
   )
}

export default UsersPage