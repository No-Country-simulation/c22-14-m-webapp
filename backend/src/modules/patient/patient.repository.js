//controla la iteraccion directa con la base de datos

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
        console.log("hola!!!!", patientData)
        return await this.patientModel.create(patientData);
    }
}

export { PatientRepository };
