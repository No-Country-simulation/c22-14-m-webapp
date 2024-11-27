class MedicalRecordController {
    constructor(medicalRecordService) {
        this.medicalRecordService = medicalRecordService;
    }

    async getMedicalRecordsByPatient(req, res) {
        try {
            const patientId = req.params.patientId;
            const medicalRecords = await this.medicalRecordService.getMedicalRecordsByPatient(patientId);
            res.status(200).json(medicalRecords);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getMedicalRecord(req, res) {
        try {
            const recordId = req.params.recordId;
            const medicalRecord = await this.medicalRecordService.getMedicalRecordById(recordId);
            res.status(200).json(medicalRecord);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createMedicalRecord(req, res) {
        try {
            const recordData = req.body;
            const medicalRecord = await this.medicalRecordService.createMedicalRecord(recordData);
            res.status(201).json(medicalRecord);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export { MedicalRecordController };
