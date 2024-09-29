import { useState, FormEvent } from 'react';
import styles from './login.module.css';
import { Input } from '../../components/input/input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAdmin } = useAuth();
  const navigate = useNavigate();

  function onHandleLogin(e: FormEvent) {
    e.preventDefault();
    if (email === 'user' && password === '123') {
      setIsAdmin(false);
      navigate("/chat", { replace: true });
    } else if (email === 'adm' && password === '123') {
      setIsAdmin(true);
      navigate("/menu", { replace: true });
    } else {
      alert("Dados incorretos");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>TalkOn</h1>

        <form onSubmit={onHandleLogin} className={styles.form}>
          <Input
            label='E-mail'
            placeholder='usuario@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label='Senha'
            placeholder='suasenha123'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
