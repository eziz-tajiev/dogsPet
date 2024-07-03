import styles from './start.module.css'
import background from '../../image/start-screen-background.jpg'

function ContentStart() {
  return(
    <main className={styles.container}>
      
      <img src={background} alt="" className={styles.background} />

    </main>
  )
}

export default ContentStart