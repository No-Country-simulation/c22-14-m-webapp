class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async findUserById(id) {
      const user = await this.userRepository.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }
  
    async createUser(userData) {
      const existingUser = await this.userRepository.findByEmail(userData.email);
      if (existingUser) {
        throw new Error('Email already in use');
      }
      return await this.userRepository.create(userData);
    }
  }
  
  module.exports = UserService;
  