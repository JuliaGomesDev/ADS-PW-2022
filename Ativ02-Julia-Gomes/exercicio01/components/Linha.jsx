import Celula from "./Celula";

export default function Linha(props) {
  if (props.preto) {
    return (
      <div>
        <Celula preto />
        <Celula />
        <Celula preto />
        <Celula />
        <Celula preto />
        <Celula />
        <Celula preto />
        <Celula />
      </div>
    );
  } else {
    return (
      <div>
        <Celula />
        <Celula preto />
        <Celula />
        <Celula preto />
        <Celula />
        <Celula preto />
        <Celula />
        <Celula preto />
      </div>
    );
  }
}
