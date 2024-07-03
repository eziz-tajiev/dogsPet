import styles from './start.module.css'
import background from '../../image/start-screen-background.jpg'
import dog from '../../image/puppyr.png'

function ContentStart() {
  return(
    <main className={styles.container}>

      <div className={styles.content}>

        <div className={styles.text}>
          <h1>Not only people <br /> need a house</h1>
          <p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
        </div>

        <img src={dog} alt="" />

      </div>
      
      <img src={background} alt="" className={styles.background} />

    </main>
  )
}

export default ContentStart