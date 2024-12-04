import { isValid, parse } from 'date-fns';

const validateDoctor = (data) => {
    if (!data.specialty) {
      return "La especialidad es requerida";
    }
    if (!data.licenseNumber) {
      return "El número de licencia es requerido";
    }
    return null;
  };
  
  const validatePatient = (data) => {
    const { address, birthDate, dni, phoneNumber } = data;
    if (!address || !birthDate || !dni || !phoneNumber) {
      return "Debe llenar todos los campos";
    }
    if (phoneNumber.length !== 9) {
      return "Formato de número de teléfono inválido";
    }

    if (!isValid(new Date(birthDate)) || new Date(birthDate) > new Date()) {
        return 'Formato de fecha inválido';
    }
    return null;
  };
  
  const validateAdmin = (data) => {
    if (!data.department) {
      return "Debe llenar todos los campos";
    }
    return null;
  };
  
  const createUserValid = (req, res, next) => {
    const { firstName, lastName, email, password, role, ...extraFields } = req.body;
    
    if (!email || !password || !firstName || !lastName || !role) {
      return res.status(400).json({ error: true, message: "Debe llenar todos los campos" });
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: true, message: "Correo inválido" });
    }
  
    if (password.length < 8) {
      return res.status(400).json({ error: true, message: "Lacontraseña debe tener al menos 6 caracteres" });
    }
  
    let roleError = null;
    if (role === "admin") {
      roleError = validateAdmin(extraFields);
    } else if (role === "doctor") {
      roleError = validateDoctor(extraFields);
    } else if (role === "patient") {
      roleError = validatePatient(extraFields);
    }
  
    if (roleError) {
      return res.status(400).json({ error: true, message: roleError });
    }
  
    next();
  };
  
  export { createUserValid };
  