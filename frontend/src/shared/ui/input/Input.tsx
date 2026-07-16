import type { JSX } from "react/jsx-runtime";
import "./input.css";
import "./number-input.css"
import "./radio-checkbox-input.css"
import "./textarea-input.css"
import { useState } from "react";

type InputTypes =
  | "radio"
  | "textarea"
  | "text"
  | "password"
  | "search"
  | "checkbox"
  | "number";
// | "range";

interface InputProps {
  readonly labelTitle?: string;
  readonly placeholderTitle?: string;
  readonly onChange?: () => void;
  readonly type: InputTypes;
  readonly style?: string;
  readonly size: "small" | "medium" | "large"
  readonly labelStyle: string;
  readonly inputId: string;
  readonly defaultValue?: string | number;
}

type InputStrategy = (props: InputProps) => JSX.Element;

const TextInput: InputStrategy = (props: InputProps) => (
  <label htmlFor={props.inputId} className={`input-label ${props.labelStyle}`}>
    <span>{props.labelTitle}</span>
    <input
      id={props.inputId}
      type={props.type}
      placeholder={props.placeholderTitle}
      onChange={props.onChange}
      className={`input input-${props.size} ${props.style}`}
    />
  </label>
);

const NumberInput: InputStrategy = (
  props: Omit<InputProps, "placeholderTitle" | "onChange">
) => {
  type OnlyNumber = Extract<InputProps['defaultValue'], number>; 
  const [value, setValue] = useState<OnlyNumber>(props.defaultValue as OnlyNumber)
  if (typeof value !== "number") return <span className="error-massage">Error bad defaultValue</span>
  return (
    <label
      htmlFor={props.inputId}
      className={`input-label ${props.labelStyle}`}
    >
      <span>{props.labelTitle}</span>
      <div className={`input input-number-box ${props.style} input-${props.size}`}>
        <button type="button" onClick={() => setValue((prev) => prev - 1)}>
          <img src="/src/assets/left-arrow.svg" alt="-"/>
        </button>
        <input
          id={props.inputId}
          type={props.type}
          onChange={(e) => setValue(Number(e.target.value))} 
          className={`input-number ${props.style} input-${props.size}`}
          value={value}
        />
        <button type="button" onClick={() => setValue((prev) => prev + 1)}>
          <img src="/src/assets/right-arrow.svg" alt="+"/>
        </button>
      </div>
    </label>
  );
};


const TextareaInput: InputStrategy = (props: InputProps) => (
  <label htmlFor={props.inputId} className={`input-label ${props.labelStyle}`}>
    <span>{props.labelTitle}</span>
    <textarea
      id={props.inputId}
      placeholder={props.placeholderTitle}
      onChange={props.onChange}
      className={`input ${props.style} input-${props.size}`}
    />
  </label>
);

const RadioCheckboxInput: InputStrategy = (
  props: Omit<InputProps, "placeholderTitle">,
) => (
  <label htmlFor={props.inputId} className={`input-label ${props.labelStyle}`}>
    <input
      id={props.inputId}
      type={props.type}
      onChange={props.onChange}
      className={`input-radio-checkbox ${props.style} input-${props.size}`}
    />
    <span>{props.labelTitle}</span>
  </label>
);

const strategies: Record<InputTypes, InputStrategy> = {
  text: TextInput,
  number: NumberInput,
  textarea: TextareaInput,
  radio: RadioCheckboxInput,
  checkbox: RadioCheckboxInput,
  password: TextInput,
  search: TextInput,
};

const Input = (props: InputProps) => {
  const { type } = props;
  const strategy = strategies[type] ?? TextInput;
  return strategy(props);
};

export default Input;
