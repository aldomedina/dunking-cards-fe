import React, { useEffect, useRef, useState } from "react";
import s from "./style.module.scss";
import Button from "../Button";
import cn from "classnames";
import Icon from "../Icon";

import useKeyPress from "../../utils/useKeyPress";

const TextInput = ({
  label,
  value,
  setValue,
  inputId,
  onClick,
  icon,
  fullWidth,
  focusOnMount,
  customRef,
  ...props
}) => {
  const inputEl = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // Focus the input element
    focusOnMount && inputEl.current && inputEl.current.focus();
  }, []);

  useKeyPress("Enter", () => {
    isFocused && !!onClick && value && onClick();
  });

  return (
    <div className={s.wrapper}>
      {label && (
        <label htmlFor={inputId} className={s.label}>
          {label}
        </label>
      )}
      <div className={cn(s.inputWrapper, { [s.fullWidth]: fullWidth })}>
        <input
          ref={customRef || inputEl}
          id={inputId}
          className={cn(s.input, {
            [s.withButton]: onClick && icon,
            [s.fullWidth]: fullWidth,
          })}
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {onClick && icon && (
          <Button
            size="input"
            customClassName={s.btn}
            onClick={onClick}
            disabled={!value}
          >
            <Icon size="xs" icon={icon} />{" "}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
