import { useState, FormEvent } from 'react'
import './login.css'
import { Input } from '../../components/input/input'; 
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function onHandleLogin(e: FormEvent) {
    e.preventDefault();
    if(email !== '' && password !== '') {
      navigate("/docs-management", {replace: true})
    } else if(email !== '') {
      alert("Preencha o campo de senha")
    } else alert('Preencha o campo de email')
  }
  
  return (
    <div className='container'>
      <div className='login-box'>
        <h1 className='title'>TalkOn</h1>
        <h2 className='subtitle'>Management</h2>

      <form onSubmit={onHandleLogin} className='form'>
        <Input
        label='E-mail' 
        placeholder='usuario@gmail.com'
        value={email}
        onChange={ (e) => setEmail(e.target.value) }
        />
        <Input 
        label='Senha'
        placeholder='suasenha123'
        value={password}
        onChange={ (e) => setPassword(e.target.value) }
        />

        <button type='submit'>Login</button>
      </form>
      </div>
    </div>
  )
}
