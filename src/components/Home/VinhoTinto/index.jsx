import Header from "components/Header";
import styles from "components/Home/VinhoTinto/VinhoTinto.module.css";
import { useNavigate } from "react-router-dom";

function VinhoTinto() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <section>
          <h1 className={styles.sectionTitle}>Vinho Tinto</h1>
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

export default VinhoTinto;
