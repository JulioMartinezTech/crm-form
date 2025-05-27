// import { useState } from "react";
import {
  Gender,
  ApiContact,
  ApiContactField,
  ApiTag,
  ApiAssociateTag,
  ApiCountries,
  ApiAddress,
  ApiCompany,
  ApiOccupation,
} from "../types/monicaTypes";

// const API_URL = import.meta.env.VITE_MONICA_API_URL;

//All fetch get requests
//get genders
export const fetchGenders = async (): Promise<Gender[]> => {
  try {
    const response = await fetch(
      "https://monica-api-server.onrender.com/genders",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

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
//get countries
export const getCountries = async (): Promise<ApiCountries[]> => {
  try {
    const response = await fetch(
      "https://monica-api-server.onrender.com/countries",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return Object.values(data.data) as ApiCountries[];
  } catch (error) {
    console.error("Error fetching genders:", error);
    throw error;
  }
};

//All fetch post requests

// Create Contact
export const createContact = async (contactData: ApiContact) => {
  try {
    const response = await fetch(
      `https://monica-api-server.onrender.com/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      }
    );

    if (!response.ok) throw new Error("Failed to create contact");
    if (response.ok) console.log("Contact created");
    const contactResponse = await response.json();
    sessionStorage.setItem("MonicaContactId", contactResponse.data.id);
    return contactResponse;
  } catch (error) {
    console.error("Error creating contact:", error);
    return null;
  }
};

export const createContactField = async (contactFieldData: ApiContactField) => {
  try {
    const response = await fetch(
      `https://monica-api-server.onrender.com/contactfields`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFieldData),
      }
    );
    if (!response.ok) throw new Error("Failed to create contact field");
    if (response.ok) console.log("Contact field created");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const createTag = async (tagData: ApiTag) => {
  try {
    const response = await fetch(
      `https://monica-api-server.onrender.com/tags`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tagData),
      }
    );
    if (!response.ok) throw new Error("Failed to create tag");
    if (response.ok) console.log("Tag created");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const associateTag = async (tagInfo: ApiAssociateTag) => {
  try {
    const response = await fetch(
      `https://monica-api-server.onrender.com/associateTag`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tagInfo),
      }
    );
    if (!response.ok) throw new Error("Failed to set tags");
    if (response.ok) console.log("Tags associated");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const createAddress = async (addressData: ApiAddress) => {
  try {
    const response = await fetch(
      `https://monica-api-server.onrender.com/address`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addressData),
      }
    );
    if (!response.ok) throw new Error("Failed to create address");
    if (response.ok) console.log("Address created");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const createCompany = async (companyData: ApiCompany) => {
  try {
    const response = await fetch(
      `https://monica-api-server.onrender.com/company`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      }
    );
    if (!response.ok) throw new Error("Failed to create company");
    if (response.ok) console.log("Company created");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const createOccupation = async (occupationData: ApiOccupation) => {
  try {
    const response = await fetch(
      `https://monica-api-server.onrender.com/occupation`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(occupationData),
      }
    );
    if (!response.ok) throw new Error("Failed to create occupation");
    if (response.ok) console.log("Occupation created");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
export const createDocument = async (documentData: FormData) => {
  try {
    const response = await fetch(
      `https://monica-api-server.onrender.com/document`,
      {
        method: "POST",
        body: documentData,
      }
    );
    if (!response.ok) throw new Error("Failed to upload document");
    console.log("Document uploaded");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
