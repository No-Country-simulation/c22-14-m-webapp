class RecordRepository{
    constructor(recordModel){
        this.recordModel = recordModel;
    }
    
    async findById(id){
        return await this.recordModel.findByPk(id);
    }

    async create(recordData){
        return await this.recordModel.create(recordData);
    }

    async findByPatientId(patientId) {
        return await this.recordModel.findAll({
            where: {
                '$Appoiment.patient_id$': patientId,
            },
            include: [
                {
                    model: Appoiment,
                    required: true,
                    attributes: ['id', 'date', 'status'],
                }
            ],
        });
    }
}

export { RecordRepository };