import "./Button.css"

interface Props {
    text: string
    medium?: boolean
    large?: boolean
}
const Button = ({ text, medium, large }: Props) => {
    return (
        <button className={`CustomButton ${text.length > 12 && "CustomButton__Width"} ${medium ? "CustomButton__Medium" : large ? "CustomButton__Large" : "CustomButton__Small"}`}>
            {text}
        </button>
    )
}

export default Button