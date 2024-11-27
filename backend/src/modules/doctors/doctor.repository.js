//controla la iteraccion directa con la base de datos

class DoctorRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
  
    async findAll() {
      return await this.doctorModel.findAll(); 
    }
  
    async findById(id) {
        return await this.doctorModel.findByPk(id);
    }
  
    async findByEspecialty(especialty) {
        return await this.doctorModel.findOne({ where: { especialty } });
    }
  
    async create(doctorData) {
        return await this.doctorModel.create(doctorData);
    }
  }
  
  export { DoctorRepository };