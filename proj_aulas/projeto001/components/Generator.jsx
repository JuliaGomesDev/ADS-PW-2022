export default function Generator(props){
  const lista = []
  for(let i = 0; i <= props.number; i++){
    lista.push(<span>{i},</span>) 
  }
  return lista
}