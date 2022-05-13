const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Complaint', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        file_64: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}