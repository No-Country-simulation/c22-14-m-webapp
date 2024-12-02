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
        console.log("users", users);
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

    async getAllDoctors() {
        const doctors = await this.userRepository.findDoctors();
        if (!doctors) {
            throw new Error('No hay doctores registrados');
        }
        return doctors;
    }

    async getAllPatients() {
        const patients = await this.userRepository.findDoctors(id);
        if (!doctors) {
            throw new Error('No hay doctores registrados');
        }
        return patientRepository;
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
                ...additionalInfo,
                userId: newUser.id
            });
        } else if ( role === 'patient') {
            const newPatient = await patientRepository.create({
                ...additionalInfo,
                userId: newUser.id
            });
            console.log(newPatient)
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
