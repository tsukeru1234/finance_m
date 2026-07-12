import type { JSX } from "react";

interface ButtonProps{
  style: string
  type: "submit" | "reset" | "button"
  disable?: boolean
  click?: () => void;
  children: JSX.Element;
}

const Button = ({style, type, disable, click, children}: ButtonProps) => {
  return (
    <button className={`button ${style}`} disabled={disable} type={type} onClick={click}>{children}</button>
  )
}

export default Button