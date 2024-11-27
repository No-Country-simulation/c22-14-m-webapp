import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db/index.js";
import { Doctor } from "../doctors/doctor.model";
import { Patient } from "../patients/patient.model";

const MedicalRecord = sequelize.define(
  "MedicalRecord",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    patientId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "patient_id",
    },
    doctorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: "doctor_id",
    },
    recordDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "record_date",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW,
      field: "createdAtt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updatedAt",
    },
  },
  {
    tableName: "medical_records",
    timestamps: false,
  }
);

Patient.hasMany(MedicalRecord, { foreignKey: "patientId", onDelete: "CASCADE",});
Doctor.hasMany(MedicalRecord, { foreignKey: "doctorId", onDelete: "CASCADE" });
MedicalRecord.belongsTo(Patient, { foreignKey: "patientId" });
MedicalRecord.belongsTo(Doctor, { foreignKey: "doctorId" });

export { MedicalRecord };
