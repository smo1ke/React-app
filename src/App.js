import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting/index.js";
import ThemeButton from "./components/ThemeButton";

// Компоненты
// функциональные
// классовые

// выражения JS в JSX {}
// Функциональный

function App() {
  return (
    <>
      <Greeting name="Masha" isGreeting={false} />;
      <ThemeButton isLightTheme={false} />
    </>
  );
}

export default App;
