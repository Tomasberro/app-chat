const {DataTypes} = require('sequelize');

 module.exports = (sequelize) => {
        return sequelize.define('Chat', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
        })
    }  