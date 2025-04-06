export interface Gender {
  id: number;
  name: string;
}
export interface Contact {
  id?: number; // Optional for new contacts
  firstName: string;
  lastName: string;
  nickName?: string;
  gender: number | string;
  birthDate?: Date | null;
}

export interface ApiContactFormat {
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
