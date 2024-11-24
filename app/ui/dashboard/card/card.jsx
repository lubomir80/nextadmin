import styles from './card.module.css'
import { MdSupervisedUserCircle } from 'react-icons/md'

function Card() {
   return (
      <div className={styles.container}>
         <MdSupervisedUserCircle size={20} />
         <div className={styles.text}>
            <span className={styles.title}>Total User</span>
            <span className={styles.number}>10.273</span>
            <span className={styles.detail}>
               <span className={styles.positive}>12%</span>
               more then previous week
            </span>
         </div>
      </div>
   )
}

export default Card