import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"

function AddUserPage() {
   return (
      <div className={styles.container}>
         <form action="" className={styles.form}>
            <input type="text" placeholder="name" name="name" required />
            <input type="email" placeholder="email" name="email" required />
            <input type="password" placeholder="password" name="password" required />
            <input type="phone" placeholder="phone" name="phone" />
            <select name="isAdmin" id="isAdmin">
               <option value={false} selected>Is Admin?</option>
               <option value={true}>yes</option>
               <option value={false}>no</option>
            </select>
            <select name="isActive" id="isActive">
               <option value={true} selected>Is Active?</option>
               <option value={true}>yes</option>
               <option value={false}>no</option>
            </select>
            <textarea
               name="address"
               id="address"
               placeholder="Address"
               rows="16">
            </textarea>
            <button type="submit">Submit</button>
         </form>
      </div>
   )
}

export default AddUserPage