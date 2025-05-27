export interface Gender {
  id: number;
  name: string;
}
export interface ApiContact {
  id?: number; // Optional for new contacts
  first_name: string;
  last_name?: string | null;
  nickname?: string | null;
  gender_id: number | null;
  birthdate_day?: number | null;
  birthdate_month?: number | null;
  birthdate_year?: number | null;
  is_birthdate_known: boolean;
  birthdate_is_age_based?: boolean;
  birthdate_age?: number | null;
  is_partial?: boolean;
  is_deceased: boolean;
  deceased_date_day?: number | null;
  deceased_date_month?: number | null;
  deceased_date_year?: number | null;
  deceased_date_is_age_based?: boolean;
  is_deceased_date_known: boolean;
}
export interface ApiContactField {
  contact_field_type_id: number;
  data: string;
  contact_id: number;
}
export interface ApiTag {
  name: string;
}
export interface ApiAssociateTag {
  id: string | null;
  tags: string[];
}
export interface ApiCountries {
  id: string;
  name: string;
}
export interface ApiAddress {
  name: string;
  street: string | null;
  city: string | null;
  province: string | null;
  postal_code: string | null;
  country: string | null;
  contact_id: number;
}
export interface ApiCompany {
  name: string;
  website: string | null;
  number_of_employees: number | null;
}
export interface ApiOccupation {
  contact_id: number;
  company_id: number;
  title: string;
  description: string | null;
  salary: number | null;
  salary_unit: string | number | null;
  currently_works_here: boolean | null;
  start_date: Date | string | null;
  end_date: Date | string | null;
}
export interface ApiDocument {
  contact_id: number;
  document: File;
}
