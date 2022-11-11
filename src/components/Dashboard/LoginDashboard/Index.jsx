import styles from "components/Dashboard/LoginDashboard/login.module.css";
import { useNavigate } from "react-router-dom";

function LoginDashboard() {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.divLogin}>
        <h1 className={styles.loginTitle}>Dashboard</h1>

        <form className={styles.form}>
          <label>
            Administrador
            <input type="text" />
          </label>
          <label>
            Senha
            <input type="password" />
          </label>

          <button className="button buttonPrimary" type="submit" >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginDashboard;
