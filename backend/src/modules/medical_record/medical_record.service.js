class MedicalRecordService {
  constructor(medicalRecordRepository) {
    this.medicalRecordRepository = medicalRecordRepository;
  }

  async getMedicalRecordsByPatient(patientId) {
    return await this.medicalRecordRepository.findAllByPatient(patientId);
  }

  async getMedicalRecordById(recordId) {
    const medicalRecord = await this.medicalRecordRepository.findById(recordId);
    if (!medicalRecord) {
      throw new Error("Medical record not found");
    }
    return medicalRecord;
  }

  async createMedicalRecord(recordData) {
    const { patient_id, doctor_id } = recordData;
    const patientExists = await Patient.findByPk(patient_id);
    const doctorExists = await Doctor.findByPk(doctor_id);
    if (!patientExists) throw new Error("Patient not found");
    if (!doctorExists) throw new Error("Doctor not found");
    return await this.medicalRecordRepository.create(recordData);
  }
}

export { MedicalRecordService };
