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
                {/* <div className={styles.line}>
                    <p className={styles.lineId}>ID</p>
                    <p className={styles.lineName}>Nome</p>
                    <p className={styles.linePerms}>Gerir permissões</p>
                    <p className={styles.lineResponsible}>Responsável</p>
                </div> */}
                <table>
                    <thead>
                        <tr className={styles.line}>
                            <td className={styles.lineId}>ID</td>
                            <td className={styles.lineName}>Nome</td>
                            <td className={styles.linePerms}>Gerir permissões</td>
                            <td className={styles.lineResponsible}>Responsável</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <DocumentLine id="001" nome="Arquivos TI - Nível 5" onClick={handleDocumentClick}/>                        
                        </tr>
                        <tr>
                        <DocumentLine id="002" nome="Arquivos RH - Nível 1" onClick={handleDocumentClick}/>
                        </tr>
                        <tr>
                        <DocumentLine id="003" nome="Arquivos Normas - Nível 1" onClick={handleDocumentClick}/>
                        </tr>
                        <tr>
                        <DocumentLine id="004" nome="Arquivos Normas - Nível 2" onClick={handleDocumentClick}/>
                        </tr>
                        <tr>
                        <DocumentLine id="005" nome="Arquivos Normas - Nível 3" onClick={handleDocumentClick}/>
                        </tr>
                        <tr>
                        <DocumentLine id="006" nome="Arquivos Normas - Nível 4" onClick={handleDocumentClick}/>
                        </tr>
                        <tr>
                        <DocumentLine id="007" nome="Arquivos Normas - Nível 5" onClick={handleDocumentClick}/>
                        </tr>
                    </tbody>
                </table>
            </section>

            {documentName !== '' && (
                <aside className={styles.selectedDocument}>
                    <h1>{documentName}</h1> 
                    <p>Funcionário <span className={styles.iconX}>X</span></p>
                    <ButtonPlus />
                </aside>
                )}
        </div>
    )
}