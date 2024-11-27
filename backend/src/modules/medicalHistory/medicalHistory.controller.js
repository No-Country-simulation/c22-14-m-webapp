class MedicalHistoryController{
    constructor(medicalHistoryService){
        this.medicalHistoryService = medicalHistoryService;
    }

    async createMedicalHistory (req, res) {
        try {
            const newMedicalHistory = await this.medicalHistoryService.createMedicationHistory(req.body);
            res.status(201).json(newMedicalHistory);
        }catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}

export { MedicalHistoryController };