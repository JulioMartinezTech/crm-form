export interface CurrentStep {
  step: number;
}
export interface PageOnChange {
  onChange: () => void;
}
export interface Contact {
  id?: number; // Optional for new contacts
  firstName: string;
  lastName: string;
  nickName?: string;
  gender: number | string;
  birthDate?: Date | null;
}
export interface ContactInfo {
  email: string;
  phone: string;
  hobby: string;
  college: string;
  childrens_names: string;
  street: string;
  city: string;
  province: string;
  postal_code: string;
  country: string;
}
export interface ContactOccupation {
  company_name: string;
  company_website?: string;
  number_of_employees?: number;
  contact_id: number;
  company_id: number;
  title: string;
  description?: string;
  salary?: number;
  salary_unit?: number | string;
  currently_works_here?: boolean;
  start_date?: Date | string;
  end_date?: Date | string;
}
