import { Router } from "express";
import { appointmentController } from "../../../modules/appointment/appointment.js"

const appointmentRoutes = new Router();

appointmentRoutes.post("/schedule", (req, res) => {appointmentController.schedule(req, res)});

export default appointmentRoutes;