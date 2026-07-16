import "./button.css"
import "./primary-button.css"
import "./secondary-button.css"

interface ButtonProps{
  style: "primary" | "secondary"
  size: "small" | "medium" | "large"
  type: "submit" | "reset" | "button"
  disable?: boolean
  click?: () => void;
  children: React.ReactNode;
}

const Button = ({style, size, type, disable, click, children}: ButtonProps) => {
  return (
    <button className={`button-${size} ${style}-button`} disabled={disable} type={type} onClick={click}>{children}</button>
  )
}

export default Button