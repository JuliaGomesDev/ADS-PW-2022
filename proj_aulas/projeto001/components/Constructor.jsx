export default function Constructor(props) {
  
  if (props.little) {
    return (
      <>
        <h1>{props.principal}</h1>
        <h2>{props.descricao}</h2>
      </>
    )
  } else {
    return (
      <>
        <h1>{props.nome}</h1>
        <h2>{props.idade}</h2>
      </>
    )
  }
}
