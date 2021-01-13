import styles from "./Avater.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "halloween-jack";
const avaterURL = `https://github.com/${name}.png`;

export default function Avater() {
  return (
    <img
      src={avaterURL}
      className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
      alt={name}
    />
  );
}
