import { ReactPropTypes } from "react";
import styles from "./App.module.css"

function Button({text}) {
  return <button className={styles.title}>{text}</button>;
}

// Button.prototype = {
//   text: ReactPropTypes.string.isRequired
// }

export default Button;