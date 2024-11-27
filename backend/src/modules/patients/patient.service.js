//intermediario entre la solicitud http y la base de datos
//(validaciones, modificaciones de tipos de datos)

class PatientService {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }

    async getPatientsByDoctor(doctorId) {
        return await this.patientRepository.findAllByDoctor(doctorId);
    }

    async getPatientById(patientId) {
        const patient = await this.patientRepository.findById(patientId);
        if (!patient) {
            throw new Error('Patient not found');
        }
        return patient;
    }


    async createPatient(patientData) {
        return await this.patientRepository.create(patientData);
    }
}

export { PatientService };
