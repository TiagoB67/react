//Always use tsrfc not tsrafc
import styles from './card_2.module.css'

type Props = {
title: string,
text: string,
image: string
}

export default function Sweets({title, text, image}: Props) {

  return (
     <div className={styles.candy}> 
        <h2></h2>{title}
        <img src={image} />
        <p>{text}</p>
      </div>
  )
}