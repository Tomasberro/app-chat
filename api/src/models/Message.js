const {DataTypes} = require('sequelize');

    module.exports = (sequelize) => {
        return sequelize.define('Message', {
            message: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [1, 255],
                        msg: "Debe tener minimo 1 caracter"
                    }
                }
            },
            read: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            read_by : {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        })
    }