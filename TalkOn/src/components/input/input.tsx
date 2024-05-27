import { InputHTMLAttributes } from "react";
import './input.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
}

export function Input( props : InputProps) {
    return(
        <>
            <label>{props.label}</label>
            <input
                {...props}
            />
        </>
    )
}