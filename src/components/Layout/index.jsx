import React from "react";
import s from "./style.module.scss";
import Menu from "../Menu";
import Button from "../Button";
import Icon from "../Icon";
import useAppStore from "../../store/appStore";
import { useNavigate } from "react-router-dom";

const Layout = ({ children, nav, goBack = false, hideMenu = false }) => {
  const setMenuOpen = useAppStore((s) => s.setMenuOpen);
  const navigate = useNavigate();

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.container}>
          {children}
          {nav && <div className={s.blank} />}
        </div>
        {goBack && (
          <div className={s.goBack}>
            <Button variant="text" onClick={() => navigate(-1)}>
              <Icon className={s.icon} icon="arrow-l" size="md" />
              <span className={s.backText}>VOLVER</span>
            </Button>
          </div>
        )}

        {!hideMenu && (
          <div className={s.burguer}>
            <Button variant="text" onClick={() => setMenuOpen(true)}>
              <Icon icon="burguer" size="md" />
            </Button>
          </div>
        )}
        <Menu />
        {nav && (
          <div className={s.nav}>
            <div className={s.navContainer}>{nav}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
