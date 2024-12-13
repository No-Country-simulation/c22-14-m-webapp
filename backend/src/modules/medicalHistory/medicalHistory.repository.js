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

    async findByPatientId(patientId) {
        return await this.medicalHistoryModel.findAll({
            where: {
                '$Appointment.patient_id$': patientId,
            },
            include: [
                {
                    model: Appointment,
                    required: true,
                    attributes: ['id', 'date', 'status'],
                }
            ],
        });
    }
}

export { MedicalHistoryRepository };