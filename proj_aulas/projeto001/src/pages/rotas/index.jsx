import Link from 'next/link'

export default function init() {
  return (
    <>
      <h1>em rotas/index.jsx</h1>
      <h2>Lista</h2>
      <ul>
        <Link href="/rotas/parametros?id=123&nome=Fulano">
          <li>Parametros</li>
        </Link>
        <Link href="/rotas/chuchu">
          <li>Aleatório</li>
        </Link>
      </ul>
      <h2>Evento</h2>
      <div>
        <button onClick={() => router.push('/rotas/teclado')}>Teclado</button>
      </div>
    </>
  )
}
