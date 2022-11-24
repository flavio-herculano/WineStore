import Header from "components/Header";
import styles from "components/Home/VinhoBranco/VinhoBranco.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function VinhoBranco() {
  const { tid } = useParams();
  const navigate = useNavigate();
  const [typeid] = useState(1);
  const [vbr, setVbr] = useState([1])

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/products/`)
    .then(res =>{
      console.log(res)
      setVbr(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [typeid])
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <section>
          <h1 className={styles.sectionTitle}>Vinho Branco</h1>
          <ul className={styles.gridContainer}>
          {
            vbr.map(get =>(
            <li className={styles.gridList} key={get.typeid}>
              <div className={styles.img}></div>
              <div className={styles.divProductInfo}>
                <h1 className={styles.productTitle}>{get.desc}</h1>
                <p>R$ {get.price}</p>
              </div>
              <button
                onClick={() => navigate(`/Produto/${get.id}`)}
                className="button buttonPrimary"
              >
                Comprar
              </button>
            </li>))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default VinhoBranco;
