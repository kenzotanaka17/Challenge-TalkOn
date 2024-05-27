import styles from './button.module.css'

interface ButtonProps {
    value: string
}
export function Button( props : ButtonProps) {

    return(
        <button className={styles.button}>{props.value}</button>
    )

}