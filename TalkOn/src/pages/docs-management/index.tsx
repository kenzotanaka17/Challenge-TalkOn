import { useState } from "react";
import styles from './docs-management.module.css';
import { ButtonPlus } from "../../components/buttonPlus";
import { BsSearch } from "react-icons/bs";
import { DocumentLine } from "../../components/documentLine";
import { SideBar } from "../../components/sideBar";

export function DocsManagement() {
    const [documentName, setDocumentName] = useState('');
    const [documents, setDocuments] = useState([
        { id: "001", nome: "Arquivos TI - Nível 5" },
        { id: "002", nome: "Arquivos RH - Nível 1" },
        { id: "003", nome: "Arquivos Normas - Nível 1" },
        { id: "004", nome: "Arquivos Normas - Nível 2" },
        { id: "005", nome: "Arquivos Normas - Nível 3" },
        { id: "006", nome: "Arquivos Normas - Nível 4" },
        { id: "007", nome: "Arquivos Normas - Nível 5" }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newDocumentName, setNewDocumentName] = useState('');
    const [newDocumentId, setNewDocumentId] = useState('');

    function handleDocumentClick(nome: string) {
        setDocumentName(nome);
    }

    function handleButtonClick() {
        setIsModalOpen(true);
    }

    function handleModalSave() {
        if (newDocumentId && newDocumentName) {
            setDocuments(prevDocuments => [
                ...prevDocuments,
                { id: newDocumentId, nome: newDocumentName }
            ]);
            setNewDocumentId('');
            setNewDocumentName('');
            setIsModalOpen(false);
        }
    }

    return (
        <div className={styles.container}>
            <SideBar page="management" />

            <section className={styles.section}>
                <div className={styles.documents}>
                    <h1>Gerenciamento de documentos</h1>
                    <label className={styles.label}>
                        <BsSearch size={"2.5rem"} color="#828282" className={styles.bsSearch} />
                        <input placeholder="Pesquisar documentos" />
                    </label>
                    <button onClick={handleButtonClick} className={styles.addButton}>Adicionar Documento</button>
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
                            {documents.map(doc => (
                                <tr key={doc.id}>
                                    <DocumentLine id={doc.id} nome={doc.nome} onClick={handleDocumentClick} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {documentName !== '' && (
                    <aside className={styles.selectedDocument}>
                        <h1>{documentName}</h1>
                        <p>Funcionário <span className={styles.iconX}>X</span></p>
                        <ButtonPlus />
                    </aside>
                )}
            </section>

            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Adicionar Documento</h2>
                        <input
                            type="text"
                            placeholder="ID do documento"
                            value={newDocumentId}
                            onChange={(e) => setNewDocumentId(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Nome do documento"
                            value={newDocumentName}
                            onChange={(e) => setNewDocumentName(e.target.value)}
                        />
                        <button>Faça upload do documento</button>
                        <div className={styles.btns}>
                            <button onClick={handleModalSave}>Salvar</button>
                            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
