class UserRepository {
    constructor(userModel, patientModel, doctorModel, adminModel) {
        this.userModel = userModel;
        this.patientModel = patientModel;
        this.doctorModel = doctorModel;
        this.adminModel = adminModel;
    }

    async findAll() {
        const doctors = await this.userModel.findAll({
            where: { role: "doctor" },
            include: [{ model: this.doctorModel}],
        });

        const patients = await this.userModel.findAll({
            where: { role: "patient" },
            include: [{ model: this.patientModel}],
        });

        const admins = await this.userModel.findAll({
            where: { role: "admin" },
            include: [{ model: this.adminModel}],
        });

        const users = [...doctors, ...patients, ...admins];

        return users
    }

    async findById(id) {
        const user = await this.userModel.findByPk(id);
        let includeModel = null;
        if (user.role === "doctor") {
            includeModel = { model: this.doctorModel };
        } else if (user.role === "patient") {
            includeModel = { model: this.patientModel };
        } else if (user.role === "admin") {
            includeModel = { model: this.adminModel };
        }

        const userWithRole = await this.userModel.findByPk(id, {
            include: includeModel ? [includeModel] : [],
          });

        return userWithRole;
    }

    async findDoctors() {
        return await this.userModel.findAll({
            where: { role: "doctor" },
            include: [{ model: this.doctorModel}],
        });
    }

    async findPatients() {
        return await this.userModel.findAll({
            where: { role: "patient" },
            include: [{ model: this.patientModel}],
        });
    }

    async findByEmail(email) {
        return await this.userModel.findOne({ where: { email } });
    }

    async create(userData) {
        return await this.userModel.create(userData);
    }
}

export { UserRepository };
