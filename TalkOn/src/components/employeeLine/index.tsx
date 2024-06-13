import styles from './employeeLine.module.css'

export interface EmployeeProps {
    img: string,
    name: string,
    role: string,
    onClick: (name : string, role : string, img : string) => void;
}

export function EmployeeLine(props : EmployeeProps) {
    return(
        <div className={styles.employee} onClick={() => props.onClick(props.name, props.role, props.img)}>
            <div className={styles.image}>
                <img src={props.img} alt={`Foto do funcionário ${props.name}`} />
            </div>
            <div className={styles.employeeInfo}>
                <h1>{props.name}</h1>
                <h2>{props.role}</h2>
            </div>
        </div>
    )
}