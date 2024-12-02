class PatientRepository {
    constructor(patientModel) {
        this.patientModel = patientModel;
    }
  
    async create(patientData) {
        return await this.patientModel.create(patientData);
    }
  }
  
  export { PatientRepository };
  