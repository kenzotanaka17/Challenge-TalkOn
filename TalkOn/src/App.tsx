import { useState, FormEvent } from 'react'
import './App.css'
import { Input } from './components/input/input';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onHandleLogin(e: FormEvent) {
    e.preventDefault();
    if(email !== '' && password !== '') {
      alert('Logado com sucesso!')
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
        <label>E-mail</label>
        <Input 
        placeholder='usuario@gmail.com'
        value={email}
        onChange={ (e) => setEmail(e.target.value) }
        />
        <label style={{marginTop: '1.3rem'}}>Senha</label>
        <Input 
        placeholder='suasenha123'
        value={password}
        onChange={ (e) => setPassword(e.target.value) }
        />

      </form>
        <button type='submit'>Login</button>
      </div>
    </div>
  )
}

export default App
