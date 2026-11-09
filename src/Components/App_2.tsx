import styles from './App_2.module.css'
import Sweets from './card_2'
  
function App() {
  return (
    <div className = {styles.container}>
        <Sweets />
        <Sweets />
        <Sweets /> 
        <Sweets />
        <Sweets />
    </div>
  )
}
export default App