class UserRepository {
    constructor(userModel) {
      this.userModel = userModel;
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
  
  module.exports = UserRepository;
  