interface InputProps {
  labelTitle?: string;
  placeholderTitle?: string;
  onChange?: () => void;
  type:
    | "radio"
    | "textarea"
    | "text"
    | "password"
    | "search"
    | "checkbox"
    | "number"
    | "range";
  style: string;
  labelStyle: string;
  inputId: string;
}

const Input = ({
  labelTitle,
  placeholderTitle,
  onChange,
  type,
  style,
  labelStyle,
  inputId,
}: InputProps) => {
  if (type === "textarea") {
    return (
      <label htmlFor={inputId} className={`input-label ${labelStyle}`}>
        <span>{labelTitle}</span>
        <textarea
          id={inputId}
          placeholder={placeholderTitle}
          onChange={onChange}
          className={`input ${style}`}
        />
      </label>
    );
  } else if (type === "number") {
    return (
      <label htmlFor={inputId} className={`input-label ${labelStyle}`}>
        <span>{labelTitle}</span>
        <input
          id={inputId}
          type={type}
          placeholder={placeholderTitle}
          onChange={onChange}
          className={`input ${style}`}
        />
      </label>
    );
  } else if (type === "radio" || type === "checkbox") {
    return (
      <label htmlFor={inputId} className={`input-label ${labelStyle}`}>
        <input
          id={inputId}
          type={type}
          onChange={onChange}
          className={`input-radio-checkbox ${style}`}
        />
        <span>{labelTitle}</span>
      </label>
    );
  } else
    return (
      <label htmlFor={inputId} className={`input-label ${labelStyle}`}>
        <span>{labelTitle}</span>
        <input
          id={inputId}
          type={type}
          placeholder={placeholderTitle}
          onChange={onChange}
          className={`input ${style}`}
        />
      </label>
    );
};

export default Input;
