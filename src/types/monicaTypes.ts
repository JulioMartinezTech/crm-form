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