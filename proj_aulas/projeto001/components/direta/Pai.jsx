import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho nome="Cebolinha" />
      <Filho nome={props.nome} sobrenome={props.sobrenome} />
      <Filho {...props} nome="Naruto" />
    </div>
  );
}
