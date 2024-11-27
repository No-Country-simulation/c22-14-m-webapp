class MedicalHistoryRepository{
    constructor(medicalHistoryModel){
        this.medicalHistoryModel = medicalHistoryModel;
    }
    
    async findById(id){
        return await this.medicalHistoryModel.findByPk(id);
    }

    async create(medicalHistoryData){
        return await this.medicalHistoryModel.create(medicalHistoryData);
    }
}

export { MedicalHistoryRepository };