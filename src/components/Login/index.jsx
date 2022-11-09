import React from "react";
import styles from "components/Login/login.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.divLogin}>
        <h1 onClick={() => navigate("/")} className="logo">
          WineStore
        </h1>
        <h1 className={styles.loginTitle}>Acesse sua conta</h1>
        <p>Preencha com seus dados</p>
        <form className={styles.form}>
          <label>
            CPF
            <input type="text" />
          </label>
          <label>
            Senha
            <input type="text" />
          </label>

          <button className="button buttonPrimary" type="submit">
            Entrar
          </button>
          <p>Esqueci minha senha</p>
        </form>
        <p>Não possuí acesso?</p>
        <button
          onClick={() => navigate("/Cadastro")}
          className="button buttonSecondary"
        >
          Criar uma conta
        </button>
      </div>
    </main>
  );
}

export default Login;
