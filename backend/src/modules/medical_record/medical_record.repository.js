class MedicalRecordRepository {
  constructor(medicalRecordModel) {
    this.medicalRecordModel = medicalRecordModel;
  }

  async findAllByPatient(patientId) {
    return await this.medicalRecordModel.findAll({
      where: { patient_id: patientId },
    });
  }

  async findById(recordId) {
    return await this.medicalRecordModel.findByPk(recordId);
  }

  async create(recordData) {
    return await this.medicalRecordModel.create(recordData);
  }
}

export { MedicalRecordRepository };
