import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { serverUrl } from "../../lib/commons";
import useUserStore from "../../store/userStore";
import Button from "../Button";
import Icon from "../Icon";
import useAppStore from "../../store/appStore";
import s from "./style.module.scss";
import { useOnClickOutside } from "../../utils";

const Menu = () => {
  const ref = useRef(null);
  const setUser = useUserStore((s) => s.setUser);
  const setMenuOpen = useAppStore((s) => s.setMenuOpen);
  const menuOpen = useAppStore((s) => s.menuOpen);

  const logout = () => {
    setUser(false);
    window.open(`${serverUrl}/auth/logout`, "_self");
  };

  useOnClickOutside(ref, () => setMenuOpen(false));
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className={s.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={s.menu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "linear" }}
            ref={ref}
          >
            <Button
              customClassName={s.close}
              variant="text"
              size="text"
              onClick={() => setMenuOpen(false)}
            >
              <Icon icon="close" />
            </Button>
            <Button fullWidth theme="error" onClick={logout}>
              CERRAR SESIÓN
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
