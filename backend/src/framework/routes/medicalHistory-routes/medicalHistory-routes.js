import { Router } from "express";
import { medicalHistoryController } from "../../../modules/medicalHistory/medicalHistory.js";

const medicalHistoryRouter = Router();


medicalHistoryRouter.post('/medicalHistory',(req, res) => medicalHistoryController.createMedicalHistory(req, res));
    
medicalHistoryRouter.get('/medicalHistory/:patient_id', (req, res) => medicalHistoryController.getMedicalHistoryByPatient.bind(req, res));

export default medicalHistoryRouter;