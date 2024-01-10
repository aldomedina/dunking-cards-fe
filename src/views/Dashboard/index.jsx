import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

import useUserStore from "../../store/userStore";

import s from "./style.module.scss";

const Dashboard = () => {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  // useEffect(() => {
  //   searchCardsByName("d")
  //     .then((cards) => console.log(cards))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <Layout>
      <div className={s.dashboard}>
        <div className={s.top}>
          <div className={s.logotype} />
          <h1 className={s.dashboardTitle}>HOLA {user?.name?.givenName}!</h1>
        </div>
        <div className={s.bottom}>
          <Button
            variant="contained"
            theme="cream"
            fullWidth
            shadow
            size="lg"
            onClick={() => navigate("/dashboard/crear")}
          >
            CREAR PARTIDA
          </Button>
          <Button
            variant="contained"
            fullWidth
            shadow
            size="lg"
            onClick={() => navigate("/dashboard/entrar")}
          >
            ENTRAR A PARTIDA
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
