class AdminRepository {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
  
    async create(adminData) {
        return await this.adminModel.create(adminData);
    }
  }
  
  export { AdminRepository };
  