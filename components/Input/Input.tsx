import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputElementProps =
    | InputHTMLAttributes<HTMLInputElement>
    | TextareaHTMLAttributes<HTMLTextAreaElement>

type InputProps = InputElementProps & {
    label?: string
    multiline?: boolean
}

const Input = ({ multiline, ...props }: InputProps) => {
    if (multiline) {
        return (
            <textarea
                {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
        )
    }

    return <input {...(props as InputHTMLAttributes<HTMLInputElement>)} />
}

export default Input
