import { Router } from "express";
import { medicalHistoryController } from "../../../modules/medicalHistory/medicalHistory.js";

const medicalHistoryRoutes = Router();


medicalHistoryRoutes.post('/medicalHistory',(req, res) =>{
    medicalHistoryController.createMedicalHistory(req, res)
});
    
medicalHistoryRoutes.get('/medicalHistory/:patient_id', (req, res) => {
    medicalHistoryController.getMedicalHistoryByPatient.bind(req, res)
});

export default medicalHistoryRoutes;