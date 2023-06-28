import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <main className={` ${styles.center}`}>
        <h1>Next.js Counter {count}</h1>
        <br />
        <button className={styles.button} onClick={increaseCount}>
          Increase
        </button>
        <button className={styles.button} onClick={decreaseCount}>
          Decrease
        </button>
      </main>
    </>
  );
}
