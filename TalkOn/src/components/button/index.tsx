import styles from './button.module.css'

interface ButtonProps {
    value: string,
    isActive?: boolean;
}
export function Button( props : ButtonProps) {

    return(
        <button className={`${styles.button} ${props.isActive ? styles.active : ''}`} >
            {props.value}
        </button>
    )

}