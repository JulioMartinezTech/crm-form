import { createCompany, createOccupation } from "../api/monicaApi";
import { ApiCompany, ApiOccupation } from "../types/monicaTypes";

export const createCompanyAndOccupation = async (
  companyData: ApiCompany,
  occupationData: ApiOccupation
) => {
  try {
    const response = await createCompany(companyData);
    const updateOccupationData = {
      ...occupationData,
      company_id: response.data.id,
    };
    await createOccupation(updateOccupationData);
  } catch (error) {
    console.error(error);
  }
};
