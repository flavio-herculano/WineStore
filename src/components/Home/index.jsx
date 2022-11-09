import React from "react";
import Header from "../Header";
import styles from "components/Home/home.module.css";

function Home() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <section>
          <h1 className={styles.sectionTitle}>Principais escolhas</h1>
          <ul className={styles.gridContainer}>
            <li className={styles.gridList}>
              <img></img>
              <div className={styles.divProductInfo}>
                <h1 className={styles.productTitle}>Vinho Tinto</h1>
                <p>R$ 3.000,00</p>
              </div>
              <button className="button buttonPrimary">Comprar</button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Home;
