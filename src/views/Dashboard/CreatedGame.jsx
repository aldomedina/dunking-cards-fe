import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import SmallTextBlock from "../../components/SmallTextBlock";

import useAppStore from "../../store/appStore";
import { clientUrl } from "../../lib/commons";

import s from "./style.module.scss";

const CreatedGamePage = () => {
  const game = useAppStore((s) => s.recentlyCreatedGame);
  const navigate = useNavigate();
  const cantContinue = false;

  useEffect(() => {
    if (!game.id) navigate("/dashboard");
  }, []);

  const url = `${clientUrl}/${game.id}`;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url);
    // TODO: add feedback with toast
  };

  return (
    <Layout
      goBack
      nav={
        <Button
          disabled={cantContinue}
          fullWidth
          onClick={() => navigate(`/game/${game.id}`)}
        >
          ENTRAR A LA PARTIDA
        </Button>
      }
    >
      <div className={s.header}>
        <SmallTextBlock>
          La partida fue creada con éxito. Ya puedes comenzar a jugar
        </SmallTextBlock>
        <div className={s.createdGame}>
          <h2 className={s.title}>{game.name}</h2>
        </div>
      </div>
      <div className={s.body}>
        <div className={s.block}></div>
        <div className={s.block}>
          <h3 className={s.subtitle}>PUEDES ENTRAR CON LA SIGUIENTE URL:</h3>
          <div className={s.urlBox}>
            <span className={s.url}>{url}</span>
            <div className={s.separator} />
            <span className={s.btn}>
              <Button variant="text" onClick={handleCopyToClipboard}>
                <Icon icon="copy" size="lg" />
              </Button>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatedGamePage;
