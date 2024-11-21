import bcrypt from 'bcrypt';
import { tokenService } from '../../common/services/services.js';

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async registerUser(userData) {
        const { password, email } = userData;

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('El email ya está registrado');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userRepository.create({
            ...userData,
            password: hashedPassword,
        });
        const token = await tokenService.createToken(newUser.id);

        return { token };
    }
}

export { UserService };
