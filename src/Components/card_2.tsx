//Always use tsrfc not tsrafc
import styles from './card_2.module.css'

type Props = {
title: string,
text: string,
image: string
}

export default function Sweets({title, text, image}: Props) {
  const random = Math.random();

  return (
     <div className={styles.candy}> 
        <h2>{title}</h2>
        <img src={image + "?" + random} />
        <p>{text}</p>
        <p>{random}</p>
      </div>
  )
}