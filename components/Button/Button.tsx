import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const Button = ({ children, className, disabled, ...rest }: ButtonProps) => {
    const base = 'rounded-md px-6 py-2'
    const state = disabled
        ? 'bg-bg-disabled text-text-disabled'
        : 'bg-primary text-white'

    return (
        <button
            className={`${base} ${state} ${className}`}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
