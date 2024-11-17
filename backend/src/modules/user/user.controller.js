class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async getUser(req, res) {
      try {
        const user = await this.userService.findUserById(req.params.id);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  }