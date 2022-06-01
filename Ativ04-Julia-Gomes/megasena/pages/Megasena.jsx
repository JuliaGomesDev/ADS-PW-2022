import styles from '../styles/megaSena.module.css'
import { useState } from 'react'

export default function Megasena() {
  const [value, setValue] = useState(0)
  const [numeros, setNumeros] = useState(Array(value).fill(0))

  function gerarNumerosNaoContido(array) {
    const min = 1
    const max = 60
    const novoNumero = parseInt(Math.random() * (max - min)) + min
    return array.includes(novoNumero)
      ? gerarNumerosNaoContido(array)
      : novoNumero
  }

  function gerarNumeros() {
    if (value < 6 || value > 15) {
      alert(`Valor ${value} não é inválido`)
    } else {
      const novoArray = Array(value)
        .fill(0)
        .reduce((a, e) => {
          const novoNumero = gerarNumerosNaoContido(a)
          return [...a, novoNumero]
        }, [])
        .sort((a, b) => a - b)

      setNumeros(novoArray)
    }
  }

  return (
    <>
      <h3 className={styles.titulo}>Mega Sena</h3>
      <h4 className={styles.numbers}>{numeros.join(' - ')}</h4>
      <div>
        <input type="text" onChange={e => setValue(+e.target.value)} />
        <button onClick={gerarNumeros}>Gerar</button>
      </div>
    </>
  )
}
