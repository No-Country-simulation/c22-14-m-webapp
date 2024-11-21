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

  async update(id, updatedData) {
      await this.userModel.update(updatedData, { where: { id } });
      return await this.findById(id);
  }

  async delete(id) {
      return await this.userModel.destroy({ where: { id } });
  }
}

export { UserRepository };
