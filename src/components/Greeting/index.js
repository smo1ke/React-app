import styles from "./Greeting.module.css";

function Greeting(props) {
  const { name, isGreeting } = props; //  {name: 'Masha'}
  const greeting = isGreeting ? "Hello" : "Goodbuy";
  return (
    <div className={styles.button}>
      {isGreeting ? "Hello" : "Goodbuy"}
      {name}!
    </div>
  );
}

export default Greeting;
