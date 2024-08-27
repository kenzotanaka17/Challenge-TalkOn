import { SideBar } from '../../components/sideBar'
import styles from './training.module.css'

export function Training() {
    return (
        <div className={styles.container}>
            <SideBar page='training'/>
            <section className={styles.chatBox}>
                <h1><span>LOGO</span>Eureka</h1>
                <hr />
                <div className={styles.chat}>
                    <p className={styles.user}>Pergunta 01</p>
                    <p className={styles.ai}>Resposta 01</p>
                    <p className={styles.user}>Pergunta 02</p>
                    <p className={styles.ai}>Resposta 02</p>
                </div>
                <input type="text" placeholder='Pergunte a Eureka!'/>
            </section>
        </div>
    )
}