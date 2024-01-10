import { serverUrl } from "./commons";

export const getGameById = async (id) => {
  try {
    const response = await fetch(`${serverUrl}/games/${id}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const game = await response.json();
    return game;
  } catch (error) {
    console.error("Error al cargar el juego:", error.message);
    throw error;
  }
};

export const createGame = async (name, players) => {
  try {
    const response = await fetch(`${serverUrl}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, players }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const newGame = await response.json();
    return newGame;
  } catch (error) {
    console.error("Error al crear el juego:", error.message);
  }
};
