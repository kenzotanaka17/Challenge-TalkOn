import { HiDotsHorizontal } from "react-icons/hi";
import styles from "./requestLine.module.css";
export interface requestLine {
    id: string,
    solicitacao: string,
    setor: string,
    data: string,
    img: string,
}

export function RequestLine(props : requestLine) {
    return(
        <div>
            <hr />
            <div className={styles.container}>
                <span className={styles.id}>{props.id}</span>
                <span className={styles.solicitacao}>{props.solicitacao}</span>
                <span className={styles.setor}>{props.setor}</span>
                <span className={styles.data}>{props.data}</span>
                <img className={styles.img} src={props.img} alt="Imagem do funcionário" />
                <span className={styles.mais}><HiDotsHorizontal /></span>
            </div>
        </div>
    )
}