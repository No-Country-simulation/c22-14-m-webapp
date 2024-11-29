class DoctorRepository {
    constructor(doctorModel) {
        this.doctorModel = doctorModel;
    }
  
    async create(doctorData) {
        return await this.doctorModel.create(doctorData);
    }
  }
  
  export { DoctorRepository };
  