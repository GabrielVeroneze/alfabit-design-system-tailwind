export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={`bg-primary rounded-lg px-8 py-3 text-white ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
