import styles from "@/app/ui/login/login.module.css"

function LoginPage() {
   return (
      <div className={styles.container}>
         <form className={styles.form}>
            <h1>Login</h1>
            <input
               type="email"
               placeholder="email"
               name="email"
               required />
            <input
               type="password"
               placeholder="password"
               name="password"
               required />
            <button>Login</button>
         </form>
      </div>
   )
}

export default LoginPage