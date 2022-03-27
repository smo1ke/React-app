import { buildQueries } from "@testing-library/react";
//import "./ThemeColor.css"; //className = "button"
import styles from "./ThemeButton.module.css";

function ThemeButton(props) {
  const { isLightTheme } = props; //  {name: 'Masha'}
  //const changeColor = isLight ? "Light" : "Dark";
  // Инлайн стили - в обьекте
  // имена свйоств - в camelCase
  // Инлайн стили используем тогда, когда они динамически формируются
  const inlineStyles = {
    color: isLightTheme ? "grey" : "white",
    backgroundColor: isLightTheme ? "white" : "black",
  };

  return (
    <button type="button" className={styles.button}>
      {isLightTheme ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeButton;
