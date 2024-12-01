import { Router } from "express";
import { medicalHistoryController } from "../../../modules/medicalHistory/medicalHistory";

const medicalHistoryRouter = Router();

medicalHistoryRouter.post('/medicalHistory', function(req, res){
    medicalHistoryController.createMedicalHistory(req, res);
});


export default medicalHistoryRouter;