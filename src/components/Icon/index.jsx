import cn from "classnames";

import styles from "./style.module.scss";

const Icon = ({ className, icon, size = "sm", ...props }) => (
  <i
    {...props}
    className={cn(styles.icon, styles[size], styles[icon], className)}
  />
);

export default Icon;
