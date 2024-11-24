import styles from "../ui/dashboard/dashboard.module.css"
import Card from "../ui/dashboard/card/card"
import RightBar from "../ui/dashboard/rightbar/rightbar"
import Transactions from "../ui/dashboard/transactions/transactions"
import Chart from "../ui/dashboard/chart/chart"


function DashboardPage() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.main}>
            <div className={styles.cards}>
               <Card />
               <Card />
               <Card />
            </div>
            <Transactions />
            <Chart />
         </div>
         <div className={styles.side}>
            <RightBar />
         </div>
      </div>
   )
}

export default DashboardPage