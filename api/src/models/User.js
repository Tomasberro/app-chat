const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    msg: "Solo puede tener letras"
                },
                len: {
                    args: [2, 255],
                    msg: "El nombre tiene que tener minimo dos caracteres"
                }
            }
        },
        phone: {
            type: DataTypes.BIGINT,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Debe ser un correo valido"
                }
            },
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 65],
                    msg: "Debe tener minimo 6 caracteres"
                }
            },
        },
    })
}