import Tabuleiro from "../components/Tabuleiro";
import styles from "../styles/Flex.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Tabuleiro />
      </div>
    </div>
  );
}
