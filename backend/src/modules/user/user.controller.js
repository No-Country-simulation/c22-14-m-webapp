class UserController {
  constructor(userService) {
      this.userService = userService;
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
