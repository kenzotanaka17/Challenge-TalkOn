import { BsFilter, BsSearch } from 'react-icons/bs'
import { SideBar } from '../../components/sideBar'
import styles from './pending-requests.module.css'
import { RequestLine } from '../../components/requestLine'
import alice from '../../assets/alice.png'

export function PendingRequests() {
    return(
        <div className={styles.container}>
            <SideBar page='requests'/>
            <section className={styles.pendingRequests}>
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
                <div className={styles.requests}>
                    <div className={styles.header}>
                        <span className={styles.id}>ID</span>
                        <span className={styles.solicitacao}>Solicitação</span>
                        <span className={styles.setor}>Setor</span>
                        <span className={styles.data}>Data</span>
                        <span className={styles.solicitante}>Solicitante</span>
                    </div>
                    <RequestLine id='023' solicitacao='Acesso ao documento de processos TI' setor='TI' data='12 abr' img={alice}/>
                    <RequestLine id='024' solicitacao='Solicito que autorize o acesso ao guia de instruções' setor='Farmácia' data='11 abr' img={alice}/>
                    <RequestLine id='025' solicitacao='Bom dia! Gostaria de revisar o manual de gestão' setor='
                    RH' data='11 abr' img={alice}/>
                </div>
            </section>
        </div>
    )
}