import React from "react";
import styles from "components/Header/header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.primary_header}>
        <main>
          <div onClick={() => navigate("/")} className={styles.logo}>
            WineStore
          </div>

          <div className={styles.div_search_box}>
            <input placeholder="o que você procura?" type="text" />
            <p onClick={() => navigate("/Entrar")}>Entrar</p>
          </div>
        </main>
      </div>
      <div className={styles.secoondary_header}>
        <div>
          <p>Vinho Tinto</p>
          <p>Vinho Branco</p>
          <p>Vinho Seco</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
