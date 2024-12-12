class DoctorController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }

    async getDoctor(req, res) {
        try {
            const doctorId = req.params.doctorId;
            const doctor = await this.doctorService.getDoctorById(doctorId);
            res.status(200).json(doctor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async createDoctor(req, res) {
        try {
            const doctorData = req.body;
            const doctor = await this.doctorService.createDoctor(doctorData);
            res.status(201).json(doctor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export { DoctorController };