import React from "react";
import cn from "classnames";

import UserConnectionCard from "../../components/UserConnectionCard";
import useGameStore from "../../store/gameStore";
import { socket } from "../../lib/socket";

import s from "./style.module.scss";

const SelectUserPopUp = () => {
  const setActivePlayer = useGameStore((s) => s.setActivePlayer);
  const game = useGameStore((s) => s.game);

  const handleSelection = (name) => {
    setActivePlayer(name);
    socket.emit("join-game", { gameId: game.id, playerId: name });
  };

  if (!game) return null;

  return (
    <div className={s.wrapper}>
      <div className={s.popup}>
        <div className={s.block}>
          <h3 className={s.subtitle}>BIENVENIDO A:</h3>
          <h2 className={s.title}>{game.name}</h2>
        </div>
        <div className={s.block}>
          <h3 className={cn(s.subtitle, s.selectPlayersTitle)}>
            SELECCIONA TU JUGADOR:
          </h3>
          <div className={s.players}>
            {game?.players &&
              Object.keys(game.players).map((player, i) => (
                <UserConnectionCard
                  key={player}
                  name={game.players[player].name}
                  handleSelection={handleSelection}
                  status={
                    game.players[player].isConnected ? "connected" : "selection"
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUserPopUp;
