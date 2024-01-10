import React from "react";
import s from "./style.module.scss";
import cn from "classnames";
import Button from "../Button";
import Icon from "../Icon";
import TextInput from "../TextInput";

const UserConnectionCard = ({
  status,
  name,
  handleSelection,
  handleRemove,
}) => {
  const renderedElement = (status) =>
    ({
      blank: (
        <div className={cn(s.wrapper, s.blank)}>
          <div className={s.name}>{name}</div>
        </div>
      ),
      created: (
        <div className={cn(s.wrapper, s.withBtn)}>
          <div className={s.name}>{name}</div>
          <Button
            size="input"
            theme="error"
            customClassName={s.btn}
            onClick={handleRemove}
          >
            <Icon icon="bin" />
          </Button>
        </div>
      ),
      selection: (
        <div className={cn(s.wrapper, s.withBtn)}>
          <div className={s.name}>{name}</div>
          <Button
            size="input"
            customClassName={s.btn}
            onClick={() => handleSelection(name)}
          >
            <Icon icon="arrow-r" />
          </Button>
        </div>
      ),
      connected: (
        <div className={cn(s.wrapper, s.connected, s.withTag)}>
          <div className={s.name}>{name}</div>
          <span className={s.tag}>EN LINEA</span>
        </div>
      ),
    }[status]);

  return renderedElement(status);
};

export default UserConnectionCard;
