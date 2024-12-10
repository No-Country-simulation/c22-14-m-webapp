import { Router } from "express";
import { appointmentController } from "../../../modules/appointment/appointment.js"
import { doctorController } from "../../../modules/doctor/doctor.js";

const appointmentRoutes = new Router();

appointmentRoutes.post("/schedule", (req, res) => {appointmentController.schedule(req, res)});

appointmentRoutes.get('/doctorsEsp', (req, res) => {doctorController.getDoctorBySpecialty(req, res)});


export default appointmentRoutes;