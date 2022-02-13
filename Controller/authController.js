const User = require("../models/User");

class authController{
    async registration(req,res){
        try{
            const{name,password}=req.body
            const candidate=await User.findOne({name})
            if (candidate){
                return res.status(400).json({message:"Имя уже занято"})
            }
            const hashPassword=bcrypt.hashSync(password,7);
            const user=new User({name,password:hashPassword})
            await user.save()
            return res.json({message:"Пользователь добавлен"})
        }catch(e){
            console.log(e)
            res.status(400).json({message:"Ошибка регистрации"})
        }
    }
}