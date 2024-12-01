class MedicalHistoryService {
    constructor(medicalHistoryRepository) {
        this.medicalHistoryRepository = medicalHistoryRepository;
    }  

    async createMedicalHistory (medicalHistoryData){
        const newMedicalHistory = await this.medicalHistoryRepository.create ({
            ...medicalHistoryData
        });
    }

    async getMedicalHistoryByPatient(patientId) {
        const medicalHistories = await this.medicalHistoryRepository.findByPatientId(patientId);
        return medicalHistories;
    }
}

export { MedicalHistoryService};