//import dependecies
import { useState, useEffect } from "react";
import { fetchGenders } from "../api/monicaApi";
import { Gender } from "../types/monicaTypes";

export const useGenders = () => {
  const [genders, setGenders] = useState<Gender[]>([]);

  useEffect(() => {
    fetchGenders()
      .then((data) => {
        const dataClean = data.map(({ id, name }) => ({ id, name }));
        setGenders(dataClean);
      })
      .catch((error) => console.error("Error al obtener géneros:", error));
  }, []);

  return genders;
};
