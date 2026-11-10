import styles from './App_2.module.css'
import Sweets from './card_2'
  
function App() {
  return (
    <div className = {styles.container}>
        <Sweets title = "Card 1" text = "This is the first card" image='https://picsum.photos/200/300' />
        <Sweets title = "Card 2" text = "This is not the first card" image='https://picsum.photos/200/300'/>
        <Sweets title= 'Card 3' text='This may be the 3rd card' image='https://picsum.photos/200/300'/> 
        <Sweets title='Card 4' text='Im not sure what card this is' image='https://picsum.photos/200/300'/>
        <Sweets title='Card 5' text='This is the 5th card' image='https://picsum.photos/200/300'/>
    </div>
  )
}
export default App