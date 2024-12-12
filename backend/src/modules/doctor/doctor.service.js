class DoctorService {
    constructor(doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    async getDoctorById(doctorId) {
        const doctor = await this.doctorRepository.findById(doctorId);
        if(!doctor) {
            throw new Error ("Doctor not found");
        }
        return doctor;
    }
    async createDoctor(doctorData){
        return await this.doctorRepository.create(doctorData);
    }
    
};
export { DoctorService };