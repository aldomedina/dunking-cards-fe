import React, { useEffect, useState } from "react";
import useUserStore from "./store/userStore";
import { serverUrl } from "./lib/commons";
import { useNavigate } from "react-router-dom";
import { socket } from "./lib/socket";
import useGameStore from "./store/gameStore";

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useUserStore((state) => state.setUser);
  const game = useGameStore((s) => s.game);
  const setGame = useGameStore((s) => s.setGame);
  const activePlayer = useGameStore((s) => s.activePlayer);
  useEffect(() => {
    const getUser = async () =>
      fetch(`${serverUrl}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          setIsLoading(false);
          throw new Error("auth failed");
        })
        .then((response) => {
          setUser(response.user);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });

    getUser();

    socket.on("disconnect", () => {
      console.log("disconnect", activePlayer, game);
      activePlayer &&
        socket.emit("leave-game", {
          gameId: game.id,
          playerId: activePlayer,
          msg: "desde approvider",
        });
    });
  }, []);

  useEffect(() => {
    if (!game.id) return;

    socket.on(`update-game-${game.id}`, (game) => {
      console.log(`[useSocket.js]: update-game-${game.id}`, game);
      setGame(game);
    });
  }, [game, socket]);

  if (isLoading) {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <div>spinner</div>
      </div>
    );
  }
  return <>{children}</>;
};

export default AppProvider;
