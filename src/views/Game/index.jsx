import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { getGameById } from "../../lib/gamesRequests";
import useGameStore from "../../store/gameStore";
import GameNav from "../../components/GameNav";
import SelectUserPopUp from "./SelectUserPopUp";
import { socket } from "../../lib/socket";

const GamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const game = useGameStore((s) => s.game);
  const setGame = useGameStore((s) => s.setGame);
  const activePlayer = useGameStore((s) => s.activePlayer);
  const setActivePlayer = useGameStore((s) => s.setActivePlayer);

  useEffect(() => {}, []);

  useEffect(() => {
    const getGame = async () => {
      try {
        const gameFromServer = await getGameById(id);
        setGame(gameFromServer);
        setIsLoading(false);
      } catch (error) {
        navigate("/dashboard");
        // TODO: add toast with "juego no encontrado"
      }
    };
    getGame();
  }, [id]);

  if (isLoading || !game?.id) {
    return <Layout hideMenu>spinner</Layout>;
  }

  if (!activePlayer) {
    return (
      <Layout hideMenu>
        <SelectUserPopUp />
      </Layout>
    );
  }

  return (
    <Layout
      nav={<GameNav active={activeSection} setActive={setActiveSection} />}
    >
      JUEGO: {game.name}
      ACTIVE PLAYER: {activePlayer}
    </Layout>
  );
};

export default GamePage;
