import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={`bg-primary rounded-md px-6 py-2 text-white ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
