export const API_BASE_URL = "http://localhost:3001/";

export const SIGN_UP = API_BASE_URL + "api/user/register";
export const SIGN_IN = API_BASE_URL + "api/user/login";
export const FEAT_APPOIMENT = API_BASE_URL + "api/appointments/schedule";
export const HISTORY_MEDICAL = API_BASE_URL + "api/medicalHistory/:appoiment_id";
export const APPOIMENT_MANAGEMENT = API_BASE_URL + "api/appointments"; 
export const DOCTOR_SELECTION = API_BASE_URL + "api/appointments/:appointment_id/doctorsEsp";
export const DOCTOR_ASSING = API_BASE_URL + "api/appointments/:appointment_id/doctor";

export const ENDPOINTS = {
  SIGN_UP,
  SIGN_IN,
  FEAT_APPOIMENT,
  HISTORY_MEDICAL,
  APPOIMENT_MANAGEMENT,
  DOCTOR_SELECTION,
  DOCTOR_ASSING,
};