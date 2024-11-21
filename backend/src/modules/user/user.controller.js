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
}

export { UserController };
