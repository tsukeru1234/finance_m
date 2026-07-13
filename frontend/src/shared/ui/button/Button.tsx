import type { JSX } from "react";
import "./button.css"
import "./primary-button.css"
import "./secondary-button.css"

interface ButtonProps{
  style: string
  type: "submit" | "reset" | "button"
  disable?: boolean
  click?: () => void;
  children: JSX.Element;
}

const Button = ({style, type, disable, click, children}: ButtonProps) => {
  return (
    <button className={style} disabled={disable} type={type} onClick={click}>{children}</button>
  )
}

export default Button