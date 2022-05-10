import Filho from "./Filho";

export default function Pai() {
  function conversaPai(param) {
    alert("Deu por hoje!!");
    alert(param);
  }

  return (
    // <div>
    //   <Filho nome="Cebolinha" />
    //   <Filho nome={props.nome} sobrenome={props.sobrenome} />
    //   <Filho {...props} nome="Naruto" />
    // </div>

    <div>
      <Filho funcao={conversaPai} />
    </div>
  );
}
