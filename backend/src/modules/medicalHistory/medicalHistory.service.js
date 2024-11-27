class MedicalHistoryService {
    constructor(medicalHistoryRepository) {
        this.medicalHistoryRepository = medicalHistoryRepository;
    }  

    async createMedicalHistory (medicalHistoryData){
        const newMedicalHistory = await this.medicalHistoryRepository.create ({
            ...medicalHistoryData
        });
    }
}

export { MedicalHistoryService};