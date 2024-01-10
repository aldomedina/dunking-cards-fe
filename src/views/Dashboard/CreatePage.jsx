import React, { useRef, useState } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import UserConnectionCard from "../../components/UserConnectionCard";
import { createGame } from "../../lib/gamesRequests";

import s from "./style.module.scss";
import useAppStore from "../../store/appStore";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const setRecentlyCreatedGame = useAppStore((s) => s.setRecentlyCreatedGame);
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const addPlayerInputRef = useRef(null);

  const handleRemove = (i) =>
    setPlayers((currentPlayers) => {
      const copy = [...currentPlayers];
      copy.splice(i, 1);
      return copy;
    });

  const handleAddPlayer = () => {
    if (!players.includes(playerName)) {
      setPlayers((ps) => [playerName, ...ps]);
      setPlayerName("");
      addPlayerInputRef.current && addPlayerInputRef.current.focus();
    }

    // TODO: handle existing-player-case with toast
  };

  const handleCreateGame = async () => {
    try {
      const newGame = await createGame(name, players);
      setRecentlyCreatedGame(newGame);
      navigate("/dashboard/creado");
      // Realiza acciones adicionales después de crear el juego
    } catch (error) {
      console.error("Error al crear el juego:", error);
    }
  };

  const cantContinue = players.length < 2 || !name;

  return (
    <Layout
      goBack
      nav={
        <Button disabled={cantContinue} fullWidth onClick={handleCreateGame}>
          CREAR PARTIDA
        </Button>
      }
    >
      <div className={s.header}>
        <h2 className={s.title}>CREAR NUEVA PARTIDA</h2>
      </div>
      <div className={s.body}>
        <div className={s.block}>
          <TextInput
            label="NOMBRE DE LA PARTIDA"
            fullWidth
            value={name}
            setValue={setName}
            focusOnMount
          />
        </div>
        <div className={s.block}>
          <h3 className={s.subtitle}>JUGADORES</h3>
          <TextInput
            value={playerName}
            setValue={setPlayerName}
            onClick={handleAddPlayer}
            fullWidth
            customRef={addPlayerInputRef}
            icon="add"
          />
          <div className={s.players}>
            {players.length ? (
              players.map((name, i) => (
                <UserConnectionCard
                  key={name}
                  status={"created"}
                  name={name}
                  handleRemove={() => handleRemove(i)}
                />
              ))
            ) : (
              <UserConnectionCard
                key={"blank"}
                status={"blank"}
                name="↑ AÑADE JUGADORES ↑"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreatePage;
