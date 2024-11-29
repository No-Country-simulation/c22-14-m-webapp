class PatientRepository {
    constructor(patientModel) {
        this.patientModel = patientModel;
    }
  
    async create(patientData) {
        console.log("repo", patientData)
        return await this.patientModel.create(patientData);
    }
  }
  
  export { PatientRepository };
  