//intermediario entre la solicitud http y la base de datos
//(validaciones, modificaciones de tipos de datos)

class DoctorService {
    constructor(doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    async getDoctorById(doctorId) {
        const doctor = await this.doctorRepository.findById(doctorId);
        if(!doctor) {
            throw new Error ("No se encontro el doctor");
        }
        return doctor;
    }
    async createDoctor(doctorData){
        return await this.doctorRepository.create(doctorData);
    }

    async getDoctorBySpecialty(doctorSpecialty) {
        const doctors = await this.doctorRepository.findBySpecialty(doctorSpecialty);
        if(!doctors) {
            throw new Error ("No se encontraron doctores,");
        }
        return doctors;
    }
    
};
export { DoctorService };