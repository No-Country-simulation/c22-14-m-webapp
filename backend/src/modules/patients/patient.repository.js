class PatientRepository {
    constructor(patientModel) {
        this.patientModel = patientModel;
    }

    async findAllByDoctor(doctorId) {
        return await this.patientModel.findAll({ where: { doctorId } });
    }

    async findById(patientId) {
        return await this.patientModel.findByPk(patientId);
    }

    async create(patientData) {
        return await this.patientModel.create(patientData);
    }
}

export { PatientRepository };
