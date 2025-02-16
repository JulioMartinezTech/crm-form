import { Gender } from "../types/monicaTypes";

const API_URL = import.meta.env.VITE_MONICA_API_URL;
const API_KEY = import.meta.env.VITE_MONICA_API_KEY; // usamos la personal key que monicaHQ nos da

export const fetchGenders = async (): Promise<Gender[]> => {
  try {
    const response = await fetch(`${API_URL}/genders`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.data as Gender[];
  } catch (error) {
    console.error("Error fetching genders:", error);
    throw error;
  }
};