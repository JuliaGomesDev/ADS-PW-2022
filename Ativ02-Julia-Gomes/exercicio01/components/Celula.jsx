import styles from "../styles/Celula.module.css";

export default function Celula(props) {
  return (
    <div
      style={{
        backgroundColor: props.preto ? "black" : "white",
      }}
      className={styles.celula}
    ></div>
  );
}
