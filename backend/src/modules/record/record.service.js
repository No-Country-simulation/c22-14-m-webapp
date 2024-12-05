class RecordService {
    constructor(recordRepository) {
        this.recordRepository = recordRepository;
    }  

    async createRecord (recordData){
        const newRecord = await this.recordRepository.create ({
            ...recordData
        });
    }

    async getRecordByPatient(patientId) {
        const records = await this.recordRepository.findByPatientId(patientId);
        return records;
    }
}

export { RecordService};