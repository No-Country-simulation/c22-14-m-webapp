import { Admin } from './admin.model.js';
import { AdminRepository } from './admin.repository.js';

const adminRepository = new AdminRepository(Admin);

export { Admin, adminRepository };