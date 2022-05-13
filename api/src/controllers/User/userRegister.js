const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../../db");
const authConfing = require("../../utils/configAuth");
const register = async (req, res) => {
  try {
    let {
      name,
      email,
      phone,
      password
    } = req.body;

    let userData = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!userData) {
      if (password.length < 6) {
        return res.json({
          msg: "La contraseña debe tener mas de 6 caracteres",
        });
      } else {
        let passHash = await bcrypt.hash(password, +authConfing.rounds);
        let user = await User.create({
          name,
          email,
          phone,
          password: passHash
        });
        if (user) {
          let token = jwt.sign({ user: user }, authConfing.secret, {
            expiresIn: "9999 days",
          });
          res.status(200).json({
            msg: "Usuario registrado correctamente",
            user: user,
            token: token,
          });
        }
      }
    }
    if(userData){
      res.json({msg:"Este mail ya se encuentra asociado a un usuario. Por favor intentar con otro"})
    }
    if (!password) {
      return res.json({ msg: "Debe ingresar una contraseña" });
    }
  } catch (err) {
    console.log("Error en el register controller", err);
  }
};

module.exports = register;