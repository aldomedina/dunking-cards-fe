import React from "react";

import s from "./style.module.scss";

const SmallTextBlock = ({ children }) => {
  return (
    <div className={s.wrapper}>
      {children} <div className={s.underline} />
    </div>
  );
};

export default SmallTextBlock;
