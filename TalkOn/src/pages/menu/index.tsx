import { SideBar } from '../../components/sideBar'
import styles from './menu.module.css'

export function Menu() {
    return (
        <div className={styles.container}>
            <SideBar page='menu'/>

            <section className={styles.lastAct}>
                <h1>Últimas atividades</h1>
                <div className={styles.box}>
                    <h2>Permissões pendentes</h2>
                    <p>Usuários que desejam acessar documentos bloqueados pelo sistema</p>
                    <span>3</span>
                </div>
            </section>
        </div>
    )
}