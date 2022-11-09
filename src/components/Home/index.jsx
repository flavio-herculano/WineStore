import React from "react";
import Header from "../Header";
import styles from "components/Home/home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <section>
          <h1 className={styles.sectionTitle}>Principais escolhas</h1>
          <ul className={styles.gridContainer}>
            <li className={styles.gridList}>
              <div className={styles.img}></div>
              <div className={styles.divProductInfo}>
                <h1 className={styles.productTitle}>Vinho Tinto</h1>
                <p>R$ 3.000,00</p>
              </div>
              <button
                onClick={() => navigate("/Produto/1")}
                className="button buttonPrimary"
              >
                Comprar
              </button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Home;
