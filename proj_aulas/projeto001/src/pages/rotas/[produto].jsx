import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

export default function init() {
  const rounter = useRouter()
  const prod = rounter.query.produto
  return (
    <>
      <h1>Detalhes do prod: {prod}</h1>
      <p>em rota/{prod}.jsx</p>
      <Link href="/rotas">
        <button>Volta</button>
      </Link>
    </>
  )
}
