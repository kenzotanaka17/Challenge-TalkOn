import { Button } from '../button'
import styles from './sideBar.module.css'
import profileImg from '../../assets/profileImg.png'
import { Link } from 'react-router-dom'

interface SideBarProps {
    page: string
}

export function SideBar(props: SideBarProps) {

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
                    <Link to='/menu'>
                        <Button value="Menu" isActive={props.page === 'menu'}/>
                    </Link>
                    <Link to='/docs-management'>
                        <Button value="Gerenciamento de documentos" isActive={props.page === 'management'}/>
                    </Link>
                    <Link to='/permissions'>
                        <Button value="Permissões" isActive={props.page === 'permissions'}/>
                    </Link>
                    <Link to='/requests'>
                        <Button value="Solicitações pendentes" isActive={props.page === 'requests'}/>
                    </Link>
                    <Link to='/training'>
                        <Button value="Treinamento Eureka" isActive={props.page === 'training'}/>
                    </Link>
                </div>
        </aside>
    )
}