import { useRouter } from 'next/router'

export default function init() {
  const rounter = useRouter()
  const thisId = rounter.query.id
  console.log(rounter.query)
  return (
    <>
      <h1>em [id]/cliente.jsx</h1>
      <h1>em {thisId}/cliente.jsx</h1>
      <h1>Olá {thisId}, seja bem vindo(a)</h1>
    </>
  )
}
