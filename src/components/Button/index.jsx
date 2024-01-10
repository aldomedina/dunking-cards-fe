import React from "react";
import cn from "classnames";
import s from "./style.module.scss";

const Button = ({
  children,
  variant = "contained",
  fullWidth = false,
  shadow = false,
  size = "md",
  theme,
  customClassName,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        s.btn,
        s[variant],
        s[theme],
        variant !== "text" && s[size],
        {
          [s.fullWidth]: fullWidth,
          [s.shadow]: shadow,
        },
        customClassName
      )}
    >
      {children}
    </button>
  );
};

export default Button;
