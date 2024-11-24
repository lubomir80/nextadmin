import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled } from 'react-icons/md'

function RightBar() {
   return (
      <div className={styles.container}>
         <div className={styles.item}>
            <div className={styles.bgContainer}>
               <Image className={styles.image} src="/astronaut.png" alt="" fill />
            </div>

            <div className={styles.text}>
               <span className={styles.notification}>🔥 Available Now</span>
               <h3 className={styles.title}>
                  How to use the new version of the admin dashboard
               </h3>
               <span className={styles.subTitle}>
                  Lorem ipsum dolor sit amet.
               </span>
               <p className={styles.description}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ab facilis totam reprehenderit quas quos.
               </p>
               <button className={styles.button}>
                  <MdPlayCircleFilled />
                  Watch
               </button>
            </div>
         </div>
         <div className={styles.item}>
            <div className={styles.text}>
               <span className={styles.notification}>🚀 Coming Soon</span>
               <h3 className={styles.title}>
                  New server actions area available
               </h3>
               <span className={styles.subTitle}>
                  Lorem ipsum dolor sit amet consectetur.
               </span>
               <p className={styles.description}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ab facilis totam reprehenderit quas quos.
               </p>
               <button className={styles.button}>
                  <MdPlayCircleFilled />
                  Watch
               </button>
            </div>
         </div>
      </div>
   )
}

export default RightBar