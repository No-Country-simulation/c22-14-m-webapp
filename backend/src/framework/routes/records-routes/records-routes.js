import { Router } from "express";
import { recordController } from "../../../modules/record/record.js";

const recordRoutes = Router();

recordRoutes.post('/record',(req, res) =>{
    recordController.createRecord(req, res)
});
    
recordRoutes.get('/record/:patient_id', (req, res) => {
    recordController.getRecordByPatient.bind(req, res)
});

export default recordRoutes;