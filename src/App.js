import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting/index.js";
import ThemeButton from "./components/ThemeButton";
import Counter from "./components/Counter";

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
      <Counter step={2} />
    </>
  );
}
// new Counter({step: 2}).render()
export default App;
