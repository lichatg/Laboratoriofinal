import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main >
      <header className={styles.header}>
        <div>
          <h1>
            <span>
          Hello!<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I Am</span>
            </span>
            <br />
            <span> Alicia Toledo</span>
          </h1>
        </div>
      </header>
      <section className={styles.infoSection}>
        <img 
          src="/imagenlab2023.png"
          alt="imagen"
          className={styles.image}

        />
        <div className={styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}>Alicia</span>
          <br/>
          <span className={styles.title}>Toledo</span>
     
        <div className={styles.list}>
          <ul>
            <li>
              <span className={styles.grayText}>Age: </span> 17
              </li>
            <li>
             <span className={styles.grayText}>Nationality:</span>  Guatemalan
              </li>
            <li>
              <span className={styles.grayText}>Skill set: </span>  idk
              </li>
            <li>
             <span className={styles.grayText}>Languages: </span>  English, Spanish and French
              </li>
          </ul>
        </div>
        </div>
      </section>
    </main>
  )
}
