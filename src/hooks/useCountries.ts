//import dependecies
import { useState, useEffect } from "react";
import { getCountries } from "../api/monicaApi";
import { ApiCountries } from "../types/monicaTypes";

export const useCountries = () => {
  const [countries, setCountries] = useState<ApiCountries[]>([]);

  useEffect(() => {
    getCountries()
      .then((data) => {
        const dataClean = data.map(({ id, name }) => ({ id, name }));
        setCountries(dataClean);
      })
      .catch((error) => console.error("Error to get countries:", error));
  }, []);

  return countries;
};
