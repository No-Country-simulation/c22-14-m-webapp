class DoctorRepository {
    constructor(doctorModel) {
        this.doctorModel = doctorModel;
    }
  
    async findAll() {
      return await this.doctorModel.findAll(); 
    }
  
    async findById(id) {
        return await this.doctorModel.findByPk(id);
    }
  
    async findBySpecialty(specialty) {
        return await this.doctorModel.findOne({ where: { specialty } });
    }
  
    async create(doctorData) {
        return await this.doctorModel.create(doctorData);
    }
  }
  
  export { DoctorRepository };