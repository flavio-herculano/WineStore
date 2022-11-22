import React from "react";
import Header from "../Header";
import styles from "components/Home/home.module.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";


function Home() {
  
  const navigate = useNavigate();
  const [prods, setProds] = useState([])
  const [id] = useState(1)
 // const [idBtn, setIdBtn] = useState(1)

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/products/`)
    .then(res =>{
      console.log(res)
      setProds( res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[id])

  return (
    <>
      <Header></Header>
          <main className={styles.main}>
        <section>
          <h1 className={styles.sectionTitle}>Principais escolhas</h1>
          <ul className={styles.gridContainer}>
            {
            prods.map(post =>(
            <li className={styles.gridList} key={post.id}>
              <div className={styles.img}></div>
              <div className={styles.divProductInfo}>
                <h1 className={styles.productTitle}>{post.desc}</h1>
                <p>R$ {post.price}</p>
              </div>
              <button value={id}
                onClick={() => navigate(`/Produto/${post.id}`)}
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
  
};

export default Home;
