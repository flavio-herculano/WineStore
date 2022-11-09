import styles from "components/Register/register.module.css";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.divRegister}>
        <h1 onClick={() => navigate("/")} className="logo">
          WineStore
        </h1>
        <h1 className={styles.registerTitle}>Criar uma conta</h1>
        <p>Preencha com seus dados</p>
        <form className={styles.form}>
          <label>
            CPF
            <input type="text" />
          </label>
          <label>
            Email
            <input type="text" />
          </label>
          <label>
            Nome
            <input type="text" />
          </label>
          <label>
            Sobrenome
            <input type="text" />
          </label>
          <label>
            Senha
            <input type="text" />
          </label>

          <button type="submit" className="button buttonPrimary">
            Criar conta
          </button>
          <p onClick={() => navigate("/Entrar")}>
            Já possuí acesso? Clique para entrar
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;
