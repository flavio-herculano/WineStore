import React, {useState, useContext} from "react";
import styles from "components/Login/login.module.css";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../Login/auth"


function Login() {
  const navigate = useNavigate();
  const {authenticated,login} = useContext
  (AuthContext);
  const [cpf, setCpf] = useState ("");
  const [pass, setPass] = useState ("");


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit" ,{cpf,pass});
    login(cpf, pass); //integração com contexto /api
  };
  return (
    <main className={styles.main}>
      <div className={styles.divLogin}>
        <h1 onClick={() => navigate("/")} className="logo">
          WineStore
        </h1>
        <p>{String(authenticated)}</p>
        <h1 className={styles.loginTitle}>Acesse sua conta</h1>
        <p>Preencha com seus dados</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            CPF
            <input 
              type="text"  
              name="cpf" 
              id="cpf" 
              value={cpf} 
              onChange={(e)=> setCpf(e.target.value)}/>
          </label>
          <label>
            Senha
            <input 
              type="password"  
              name="pass" 
              id="pass" 
              value={pass} 
              onChange={(e)=> setPass(e.target.value)}/>
          </label>

          <button className="button buttonPrimary" type="submit">
            Entrar
          </button>
          <p onClick={() => alert("Sinto muito!")}>Esqueci minha senha</p>
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
