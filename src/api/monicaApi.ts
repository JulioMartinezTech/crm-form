// import { useState } from "react";
import axios from "axios";
import { Gender, Contact } from "../types/monicaTypes";

// const API_URL = import.meta.env.VITE_MONICA_API_URL;
const API_KEY = import.meta.env.VITE_MONICA_API_KEY; // usamos la personal key que monicaHQ nos da


//get genders
export const fetchGenders = async (): Promise<Gender[]> => {
  try {
    const response = await fetch("api/genders", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        // Accept: "application/json",
      },
      redirect: "follow",
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

// Create Contact
export const createContact = async (contactData: Contact) => {
  try {
      const response = await fetch(`api/contacts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactData),
      });

      if (!response.ok) throw new Error("Failed to create contact");

      return await response.json();
  } catch (error) {
      console.error("Error creating contact:", error);
      return null;
  }
};

//using axios

export const getGendersAxios = async function getUser() {
  try {
    const response = await axios.get('https://app.monicahq.com/api/genders', {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      }
    });
    console.log('axios response', response);
  } catch (error) {
    console.error(error);
  }
}