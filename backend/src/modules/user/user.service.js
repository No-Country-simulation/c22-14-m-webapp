import bcrypt from 'bcrypt';
import { tokenService } from '../../common/services/services.js';
import { doctorRepository } from '../doctor/doctor.js';
import { patientRepository } from '../patient/patient.js';

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async findAllUsers() {
        const users = await this.userRepository.findAll();
        if(users.length === 0) {
          throw new Error('No hay usuarios registrados');
        }
        return users;
    }
  
    async getUserById(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return user;
    }

    async registerUser(userData) {
        const { firstName, lastName, role, password, email, ...additionalInfo } = userData;

        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('El email ya está registrado');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userRepository.create({
            firstName,
            lastName,
            role,
            email,
            password: hashedPassword,
        });

        if(role === 'doctor') {
            const newDoctor = await doctorRepository.create({
                ...additionalInfo
            });
            console.log("doctor creado", newDoctor)
        } else if ( role === 'patient') {
            console.log(additionalInfo)
            const newPatient = await patientRepository.create({
                ...additionalInfo
            });
            console.log("paciente creado", newPatient)
        } else if (role === 'admin') {
            console.log("hello admin")
        }
        
        const token = await tokenService.createToken(newUser.id);

        return { token };
    }

    async loginUser(email, password) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Credenciales inválidas');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Credenciales inválidas');
        }

        const { password: _, ...userWithoutPassword } = user.toJSON();
        const token = await tokenService.createToken(userWithoutPassword.id);
        return { token };
    }
}

export { UserService };
