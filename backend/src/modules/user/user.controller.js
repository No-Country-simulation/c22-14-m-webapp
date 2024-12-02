// controlador, recibe las solicitudes http, llama a los metodos
// envia la respuesta al front(errores o rediccionamientos)

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getAllUsers(req, res) {
        try {
        const users = await this.userService.findAllUsers();
        res.status(200).json(users);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    };
    
    async getUser(req, res) {
        try {
            const user = await this.userService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };

    async getAllDoctors(req, res) {
        try {
            const doctors = await this.userService.getAllDoctors();
            console.log("vamosss", doctors)
            res.status(200).json(doctors);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    };

    async getPatients(req, res) {
        try {
            const patients = await this.userService.getPatients();
            res.status(200).json(patients);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async register(req, res) {
        try {
            const newUser = await this.userService.registerUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await this.userService.loginUser(email, password);
            res.status(200).json(user);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
  
}

export { UserController };
