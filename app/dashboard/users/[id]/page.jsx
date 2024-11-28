import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

function SingleUserPage() {
   return (
      <div className={styles.container}>
         <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
               <Image src="/noavatar.png" alt="" fill />
            </div>
            <p>Hello</p>
         </div>
         <div className={styles.formContainer}>
            <form action="" className={styles.form}>
               <label>Username</label>
               <input type="text" placeholder="Andrzej Sapkowski" name="name" required />
               <label>Email</label>
               <input type="email" placeholder="asapkowski@gmail.com" name="email" required />
               <label>Password</label>
               <input type="password" name="password" required />
               <label>Phone</label>
               <input type="phone" placeholder="555333888" name="phone" />
               <label>Address</label>
               <textarea
                  name="address"
                  id="address"
                  placeholder="Mickiewicza, 5/55, Łódź"
                  rows="2">
               </textarea>
               <label>Is Admin?</label>
               <select name="isAdmin" id="isAdmin">
                  <option value={true}>yes</option>
                  <option value={false}>no</option>
               </select>
               <label>Is Active?</label>
               <select name="isActive" id="isActive">
                  <option value={true}>yes</option>
                  <option value={false}>no</option>
               </select>
               <button type="submit">Update</button>
            </form>
         </div>
      </div>
   )
}

export default SingleUserPage