import { RecordService } from "./record.service.js";
import { RecordController } from "./record.controller.js";
import { Record } from "./record.model.js";
import { RecordRepository } from "./record.reposirory.js";

const recordRepository = new RecordRepository(Record);
const recordService = new RecordService(recordRepository);
const recordController = new RecordController(recordService);

export { recordController };