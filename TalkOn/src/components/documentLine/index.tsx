import { ButtonPlus } from '../buttonPlus'
import styles from './documentLine.module.css'
import profileImg from '../../assets/profileImg.png'

interface LineProps {
    id: string;
    nome: string;
    onClick: (nome: string) => void;
}

export function DocumentLine({id, nome, onClick} : LineProps) {
    return(
        <div className={styles.line} onClick={() => onClick(nome)}>
            <p className={styles.lineId}>{id}</p>
            <p className={styles.lineName}>{nome}</p>
            <div>
                <ButtonPlus/>
            </div>
            <img className={styles.image} src={profileImg} alt="Foto de perfil" />
        </div>
    )
}