import { useState } from 'react'
import styles from '../styles/Contador.module.css'

export default function init() {
  const [value, setValue] = useState(0)

  function add() {
    setValue(value + 1)
  }

  function decrease() {
    setValue(value - 1)
  }

  return (
    <div>
      <div className={styles.container}>
        <p className={styles.identifier}>{value}</p>
      </div>
      <div className={styles.btns}>
        <button onClick={decrease} style={{ marginRight: '10px' }}>
          -
        </button>
        <button onClick={add}>+</button>
      </div>
    </div>
  )
}
