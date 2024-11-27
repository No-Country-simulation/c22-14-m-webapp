import { MedicalHistoryService } from "./medicalHistory.service";
import { MedicalHistoryController } from "./medicalHistory.controller";
import { MedicalHistory } from "./medicalHistory.model";
import { MedicalHistoryRepository } from "./medicalHistory.reposirory";

const medicalHistoryRepository = new MedicalHistoryRepository(MedicalHistory);
const medicalHistoryService = new MedicalHistoryService(medicalHistoryRepository);
const medicalHistoryController = new MedicalHistoryController(medicalHistoryService);

export { medicalHistoryController };