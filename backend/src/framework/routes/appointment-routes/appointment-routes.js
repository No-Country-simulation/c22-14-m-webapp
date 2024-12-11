import { Router } from "express";
import { appointmentController } from "../../../modules/appointment/appointment.js"

const appointmentRoutes = new Router();

appointmentRoutes.post("/schedule", (req, res) => {appointmentController.schedule(req, res)});
appointmentRoutes.get("/", (req, res) => {appointmentController.getAppointments(req, res)});

export default appointmentRoutes;