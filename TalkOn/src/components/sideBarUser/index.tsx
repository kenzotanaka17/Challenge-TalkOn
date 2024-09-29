import { ButtonAdm } from '../buttonAdm'
import styles from './sideBar.module.css'
import profileImg from '../../assets/profileImg.png'

export function SideBarUser() {

    return (
        <aside className={styles.leftBar}>
                <div className={styles.figure}>
                    <img className={styles.image} src={profileImg} alt="Foto de perfil" />
                </div>
                <div className={styles.person}>
                    <p className={styles.name}>Giovanna Medeiros</p>
                    <p className={styles.role}>Compliance Officer</p>
                </div>
                <div className={styles.buttons}>
                        <ButtonAdm value="Chat - dia 21/05/2024"/>
                        <ButtonAdm value="Chat - dia 23/05/2024"/>
                </div>
        </aside>
    )
}