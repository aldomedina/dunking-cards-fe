import React, { useEffect } from "react";

import Button from "../../components/Button";
import { serverUrl } from "../../lib/commons";
import { searchCardsByName } from "../../lib/requests";

import s from "./style.module.scss";

const Home = () => {
  const handleGoogleSignIn = () => {
    window.open(`${serverUrl}/auth/google`, "_self");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.logo} />
        <Button size="lg" onClick={handleGoogleSignIn}>
          INICIAR SESIÓN
        </Button>
      </div>
    </div>
  );
};

export default Home;
