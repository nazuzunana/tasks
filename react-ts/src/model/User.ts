export interface User {
  //  Todo: Add properties with appropriate types: firstName, lastName, dateOfBirth, weight, height, diagnoses

  // zuzana
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  weight: number;
  height: number;
  diagnoses: string;
}

// Use this key for storing user in browser localStorage
export const userLocalStorageKey = "user";
