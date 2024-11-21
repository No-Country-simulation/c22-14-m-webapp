class UserRepository {
  constructor(userModel) {
      this.userModel = userModel;
  }

  async findByEmail(email) {
      return await this.userModel.findOne({ where: { email } });
  }

  async create(userData) {
      return await this.userModel.create(userData);
  }
}

export { UserRepository };
