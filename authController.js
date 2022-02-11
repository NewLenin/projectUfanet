const User = require("./models/user");
const bcrypt = require("bcryptjs");

class authController {
  async reg(req, res) {
    try{
        const {username, password} = req.body;
        const gosti = await User.findOne({ username})
        if (gosti){
            return res.status(400).json({message: 'Уже есть такой пользователь'})
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const user = new User({username, password:hashPassword})
        await user.save()
        return res.json({message: 'Ты зарегался'})
    }catch(e){
        console.log(req.body)
        res.status(400).json({message: 'Ошибка регистрации'})
    }
  }

  async login(req, res) {
      console.log(req);
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Ошибка авторизации" });
    }
  }

  async getUsers(req, res) {
    try {
      res.json(req.body);
      res.json(req.params);
      res.json(req.query);
      console.log(req);
    } catch (e) {}
  }
}

module.exports = new authController();
