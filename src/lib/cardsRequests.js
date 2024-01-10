import { serverUrl } from "./commons";

export const getCardByIds = async (ids) => {
  try {
    const response = await fetch(`${serverUrl}/cartas?ids=${ids.join(",")}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    return data;
    // Haz algo con los datos de la carta aquí
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const searchCardsByName = async (nombre) => {
  try {
    const response = await fetch(
      `${serverUrl}/cartas/buscar?nombre=${encodeURIComponent(nombre)}`,
      { method: "GET", credentials: "include" }
    );
    const data = await response.json();
    return data;
    // Haz algo con los datos de las cartas aquí
  } catch (error) {
    console.error("Error:", error.message);
  }
};
