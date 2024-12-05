class RecordController{
    constructor(recordService){
        this.recordService = recordService;
    }

    async createRecord (req, res) {
        try {
            const newRecord = await this.recordService.createRecord(req.body);
            res.status(201).json(newRecord);
        }catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    async getRecordByPatient(req, res) {
        try {
            const { patient_id } = req.params;
            const records = await this.recordService.getRecordByPatient(patient_id);

            if (records.length === 0) {
                return res.status(404).json({ message: 'No se encontraron historias médicas para este paciente.' });
            }

            res.status(200).json(records);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener las historias médicas.', error: error.message });
        }
    }

}

export { RecordController };