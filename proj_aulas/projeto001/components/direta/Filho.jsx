export default function Filho(props) {
  return (
    // <div>
    //   <h1>
    //     {props.nome} {props.sobrenome}
    //   </h1>
    // </div>

    <div>
      <h1>Filho - Indireta</h1>
      <button onClick={props.funcao}>Chama pai</button>
      <button onClick={() => props.funcao("Vai cagar Alisson!!")}>
        Um elogio
      </button>
    </div>
  );
}
