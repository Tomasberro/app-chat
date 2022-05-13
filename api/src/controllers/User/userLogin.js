const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authConfing = require("../../utils/configAuth");

const login = async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({
    where: {
      email: email,
    },
  });
  try {
    if (!user) {
      res.json({ msg: "Este usuario no coincide con uno existente" });
    }
    console.log(user, "user");
      let match = await bcrypt.compare(password, user.password);
      console.log("este es el resultado del match", match);
      if (match) {
        let token = jwt.sign({ user: user }, authConfing.secret, {
          expiresIn: "999days",
        });
        return res.status(200).json({ auth: true, token: token });
      } else {
        return res.json({
          auth: false,
          id: user.id,
          msg: "La contraseña o el mail no coinciden con nuestros registros. Por favor intenete de nuevo",
        });
      }
    }
 catch (err) {
    console.log("Error en el login controller", err);
  }
};

module.exports = login;