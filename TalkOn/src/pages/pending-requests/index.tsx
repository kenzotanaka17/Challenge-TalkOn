import { BsFilter, BsSearch } from 'react-icons/bs'
import { SideBar } from '../../components/sideBar'
import styles from './pending-requests.module.css'

export function PendingRequests() {
    return(
        <div className={styles.container}>
            <SideBar page='requests'/>
            <section className={styles.requests}>
                <h1>Solicitações</h1>
                <div className={styles.inputs}>
                    <label className={styles.label}>
                        <BsSearch size={"2.5rem"} color="#828282"/>
                        <input 
                            placeholder="Pesquisar solicitações"
                        />
                    </label>
                    <button><BsFilter size={"2.5rem"} color="#828282"/> Filtros</button>
                </div>
            </section>
        </div>
    )
}