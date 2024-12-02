import styles from "@/app/ui/dashboard/users/users.module.css"
import Image from "next/image"
import Link from "next/link"

function UserItem({ user }) {
   const { id, email, isAdmin, isActive, username, img, createdAt } = user

   return (
      <tr>
         <td>
            <div className={styles.user}>
               <Image src={img || "/noavatar.png"}
                  alt={username}
                  width={40}
                  height={40}
                  className={styles.userImg}
               />
               {username}
            </div>
         </td>
         <td>{email}</td>
         <td>{createdAt.toString().slice(4, 16)}</td>
         <td>{isAdmin ? "Admin" : "Client"}</td>
         <td>{isActive ? "active" : "passive"}</td>
         <td>
            <div className={styles.buttons}>
               <Link href={`/dashboard/users/${id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
               </Link>
               <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </div>
         </td>
      </tr>
   )
}

export default UserItem