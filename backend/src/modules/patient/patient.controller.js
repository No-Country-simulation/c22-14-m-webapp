// controlador, recibe las solicitudes http, llama a los metodos
// envia la respuesta al front(errores o rediccionamientos)

class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }

    async getPatients(req, res) {
        try {
            const doctorId = req.params.doctorId; 
            const patients = await this.patientService.getPatientsByDoctor(doctorId);
            res.status(200).json(patients);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getPatient(req, res) {
        try {
            const patientId = req.params.patientId;
            const patient = await this.patientService.getPatientById(patientId);
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async createPatient(req, res) {
        try {
            const patientData = req.body;
            const patient = await this.patientService.createPatient(patientData);
            res.status(201).json(patient);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export { PatientController };
