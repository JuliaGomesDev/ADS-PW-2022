import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

export default function init() {
  const router = useRouter()
  const id = router.query.id
  const nome = router.query.nome

  return (
    <>
      <h1>em rotas/parametros.jsx</h1>
      <h1>id: {id}</h1>
      <h1>Nome: {nome}</h1>
      <Link href="/rotas">
        <button>Volta</button>
      </Link>
    </>
  )
}
