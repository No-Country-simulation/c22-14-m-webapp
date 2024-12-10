class MedicalHistoryController{
    constructor(medicalHistoryService){
        this.medicalHistoryService = medicalHistoryService;
    }

    async createMedicalHistory (req, res) {
        try {
            const { appoinment_id } = req.params;
            const medicalHistoryData = {
                ...req.body,
                appoinment_id,
            };
            const newMedicalHistory = await this.medicalHistoryService.createMedicationHistory(medicalHistoryData);
            res.status(201).json(newMedicalHistory);
        }catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async getMedicalHistoryByPatient(req, res) {
        try {
            const { patient_id } = req.params;
            const medicalHistories = await this.medicalHistoryService.getMedicalHistoryByPatient(patient_id);

            if (medicalHistories.length === 0) {
                return res.status(404).json({ message: 'No se encontraron historias médicas para este paciente.' });
            }

            res.status(200).json(medicalHistories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener las historias médicas.', error: error.message });
        }
    }

}

export { MedicalHistoryController };