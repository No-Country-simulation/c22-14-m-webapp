//controla la iteraccion directa con la base de datos

class UserRepository {
  constructor(userModel) {
      this.userModel = userModel;
  }

  async findAll() {
    return await this.userModel.findAll(); // Obtiene todos los usuarios
  }

  async findById(id) {
      return await this.userModel.findByPk(id);
  }

  async findByEmail(email) {
      return await this.userModel.findOne({ where: { email } });
  }

  async create(userData) {
      return await this.userModel.create(userData);
  }
}

export { UserRepository };
