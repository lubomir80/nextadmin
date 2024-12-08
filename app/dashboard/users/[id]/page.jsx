import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import { updateUser } from "@/libs/actions";
import { fetchUser } from "@/libs/data";
import Image from "next/image"

async function SingleUserPage({ params }) {
   const { id } = params;
   const user = await fetchUser(id)

   console.log(user.isAdmin);


   return (
      <div className={styles.container}>
         <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
               <Image src={user.img || "/noavatar.png"} alt="" fill />
            </div>
            <p>{user.username}</p>
         </div>
         <div className={styles.formContainer}>
            <form action={updateUser} className={styles.form}>
               <input type="hidden" name="id" value={user.id} />
               <label>Username</label>
               <input type="text" placeholder={user.username} name="name" required />
               <label>Email</label>
               <input type="email" placeholder={user.email} name="email" required />
               <label>Password</label>
               <input type="password" name="password" required />
               <label>Phone</label>
               <input type="phone" placeholder={user.phone} name="phone" />
               <label>Address</label>
               <textarea
                  name="address"
                  id="address"
                  placeholder={user.address}
                  rows="2">
               </textarea>
               <label>Is Admin?</label>
               <select name="isAdmin" id="isAdmin" >
                  <option value={true} selected={user.isAdmin}>yes</option>
                  <option value={false} selected={!user.isAdmin}>no</option>
               </select>
               <label>Is Active?</label>
               <select name="isActive" id="isActive">
                  <option value={true} selected={user.isActive}>yes</option>
                  <option value={false} selected={!user.isActive}>no</option>
               </select>
               <button type="submit">Update</button>
            </form>
         </div>
      </div>
   )
}

export default SingleUserPage