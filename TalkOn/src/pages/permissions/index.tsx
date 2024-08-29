import { BsSearch } from 'react-icons/bs'
import { EmployeeLine } from '../../components/employeeLine'
import { SideBar } from '../../components/sideBar'
import styles from './permissions.module.css'
import alice from '../../assets/AliceA.jpg'
import alvaro from '../../assets/AlvaroB.jpg'
import amilton from '../../assets/AmiltonC.jpg'
import bruno from '../../assets/BrunoM.jpg'
import bianca from '../../assets/BiancaV.jpg'
import carolina from '../../assets/Carolina.jpg'
import caroline from '../../assets/CarolineF.jpg'
import { useState } from 'react'
import { ButtonPlus } from '../../components/buttonPlus'

export function Permissions() {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeImg, setEmployeeImg] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');

    function handleEmployeeClick(name: string, role: string, img: string) {
        setEmployeeName(name)
        setEmployeeImg(img)
        setEmployeeRole(role)
    }

    return(
        <div className={styles.container}>
            <SideBar page='permissions'/>

            <div className={styles.permissions}>
            <section className={styles.perm}>
                <h1 className={styles.titlePerm}>Permissões</h1>
                    <label className={styles.label}>
                        <BsSearch size={"2.5rem"} color="#828282"/>
                        <input 
                            placeholder="Pesquisar funcionários"
                        />
                    </label>
                    <EmployeeLine isActive={employeeName === 'Alice Almeida'} img={alice} name='Alice Almeida' role='Designer Pleno' onClick={handleEmployeeClick}/>
                    <EmployeeLine isActive={employeeName === 'Álvaro Bueno'} img={alvaro} name='Álvaro Bueno' role='Analista de suporte ao Cliente' onClick={handleEmployeeClick}/>
                    <EmployeeLine isActive={employeeName === 'Amilton Costa'} img={amilton} name='Amilton Costa' role='Desenvolvedor Sênior' onClick={handleEmployeeClick}/>
                    <EmployeeLine isActive={employeeName === 'Bruno Machado'} img={bruno} name='Bruno Machado' role='Técnico Farmacêutico' onClick={handleEmployeeClick}/>
                    <EmployeeLine isActive={employeeName === 'Bianca Vianna'} img={bianca} name='Bianca Vianna' role='Operadora de Esteira - Setor 13' onClick={handleEmployeeClick}/>
                    <EmployeeLine isActive={employeeName === 'Carolina Nakamura'} img={carolina} name='Carolina Nakamura' role='Estagiária de Recursos Humanos' onClick={handleEmployeeClick}/>
                    <EmployeeLine isActive={employeeName === 'Caroline Figueiredo'} img={caroline} name='Caroline Figueiredo' role='Gestora Financeira' onClick={handleEmployeeClick}/>
            </section>
            <section className={styles.employee}>
            {employeeName !== '' && (
                <aside className={styles.selectedEmployee}>
                    <img src={employeeImg} alt="Imagem do funcionário" />
                    <h1 >{employeeName}</h1> 
                    <p>{employeeRole}</p>
                    <div className={styles.employeeInfo}>
                        <p>Designer <span>X</span></p>
                        <p>Pleno <span>X</span></p>
                        <p>Funcionário <span>X</span></p>
                    </div>
                    <ButtonPlus />
                </aside>
                )}
            </section>
            </div>
        </div>
    )
}

