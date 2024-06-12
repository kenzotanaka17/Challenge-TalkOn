import { useState } from "react"
import styles from './docs-management.module.css'
import { ButtonPlus } from "../../components/buttonPlus";
import { BsSearch } from "react-icons/bs";
import { DocumentLine } from "../../components/documentLine";
import { SideBar } from "../../components/sideBar";

export function DocsManagement() {
    const [documentName, setDocumentName] = useState('');

    function handleDocumentClick(nome: string) {
        setDocumentName(nome)
    }
    return(
        <div className={styles.container}>
            <SideBar page="management"/>

            <section className={styles.documents}>
                <h1>Gerenciamento de documentos</h1>
                <label className={styles.label}>
                    <BsSearch size={"2.5rem"} color="#828282"/>
                    <input 
                        placeholder="Pesquisar documentos"
                    />
                </label>
                <div className={styles.line}>
                    <p className={styles.lineId}>ID</p>
                    <p className={styles.lineName}>Nome</p>
                    <p className={styles.linePerms}>Gerir permissões</p>
                    <p className={styles.lineResponsible}>Responsável</p>
                </div>
                <DocumentLine id="001" nome="Arquivos TI - Nível 5" onClick={handleDocumentClick}/>
                <DocumentLine id="002" nome="Arquivos RH - Nível 1" onClick={handleDocumentClick}/>
                <DocumentLine id="003" nome="Arquivos Normas - Nível 1" onClick={handleDocumentClick}/>
                <DocumentLine id="004" nome="Arquivos Normas - Nível 2" onClick={handleDocumentClick}/>
                <DocumentLine id="003" nome="Arquivos Normas - Nível 1" onClick={handleDocumentClick}/>
                <DocumentLine id="003" nome="Arquivos Normas - Nível 1" onClick={handleDocumentClick}/>
                <DocumentLine id="003" nome="Arquivos Normas - Nível 1" onClick={handleDocumentClick}/>
                <DocumentLine id="003" nome="Arquivos Normas - Nível 1" onClick={handleDocumentClick}/>
                <DocumentLine id="003" nome="Arquivos Normas - Nível 1" onClick={handleDocumentClick} />
                <DocumentLine id="003" nome="Arquivos Normas - Nível 1" onClick={handleDocumentClick}/>
            </section>

            {documentName !== '' && (
                <aside className={styles.selectedDocument}>
                {/* Aqui vai a useState do documento selecionado */}
                    <h1>{documentName}</h1> 
                    <p>Funcionário <span className={styles.iconX}>X</span></p>
                    <ButtonPlus />
                </aside>
                )}
        </div>
    )
}