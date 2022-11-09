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
          <p onClick={() => navigate("/Vinho_Tinto")}>Vinho Tinto</p>
          <p onClick={() => navigate("/Vinho_Branco")}>Vinho Branco</p>
          <p onClick={() => navigate("/Vinho_Seco")}>Vinho Seco</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
