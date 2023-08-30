import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main >
      <header classname={styles.header}>
        <div>
          <h1>
            <span>
          Hello!<span classname={styles.yellowText}>.</span>
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
    </main>
  )
}
