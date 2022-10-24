
import { Header } from "./components/Header";
import styles from "./App.module.css"
import { HomeTask } from "./components/HomeTask";



export function App() {
  

  return (

      <div>
        <Header />
        <div className={styles.wrapper}>
          <HomeTask />
        </div>
      </div>    
      
  )
}


