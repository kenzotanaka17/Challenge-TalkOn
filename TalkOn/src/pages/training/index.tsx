import { FormEvent, useState } from 'react'
import { SideBar } from '../../components/sideBar'
import styles from './training.module.css'
import logo from '../../assets/talkon.png'

export function Training() {
    const [input, setInput] = useState('') 
    const [messages, setMessages] = useState<string[]>([])

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (input.trim() !== '') {
            setMessages([...messages, input])
            setInput('')
        }
    }

    return (
        <div className={styles.container}>
            <SideBar page='training'/>
            <section className={styles.chatBox}>
                <h1><span><img src={logo} alt="Logo eureka" /></span>Eureka</h1>
                <hr />
                <div className={styles.chat}>
                    <p className={styles.user}>Pergunta 01</p>
                    <p className={styles.ai}>Resposta 01</p>
                    <p className={styles.user}>Pergunta 02</p>
                    <p className={styles.ai}>Resposta 02</p>
                    {messages.map((message, index) => (
                        <p key={index} className={styles.user}>{message}</p>
                    ))}
                </div>
                <form className={styles.question} onSubmit={handleSubmit}>
                    <textarea 
                        placeholder='Pergunte a Eureka!'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type='submit'>Enviar</button>
                </form>
            </section>
        </div>
    )
}
