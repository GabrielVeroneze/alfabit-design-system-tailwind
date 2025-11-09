export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={`bg-[#2D5BFF] rounded-lg px-8 py-3 text-white ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
