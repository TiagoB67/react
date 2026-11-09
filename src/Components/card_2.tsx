//Always use tsrfc not tsrafc
import styles from './card_2.module.css'
export default function Sweets() {
  return (
     <div className={styles.candy}> 
        <h2>Sweets</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Candy-Cane-Classic.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="Hero" />
        <p>Paragraph made by Tiago</p>
      </div>
  )
}