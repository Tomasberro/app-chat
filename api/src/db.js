require('dotenv').config();
const { Sequelize } = require('sequelize');
const userModel = require('./models/User');
const messageModel = require('./models/Message');
const chatModel = require('./models/Chat');
const complaintModel = require('./models/Complaint');
const userChatModel = require('./models/UserChat');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
} = process.env;

const sequelize = process.env.NODE_ENV === "production"
? new Sequelize({
    database: DB_NAME,
    dialect: "postgres",
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
  })
: new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, 
  native: false, 
});

userModel(sequelize);
messageModel(sequelize);
chatModel(sequelize);
complaintModel(sequelize);
userChatModel(sequelize);


const { User, Message, Chat, Complaint, UserChat } = sequelize.models;

User.hasMany(Message)
Message.belongsTo(User)

User.hasMany(Complaint)
Complaint.belongsTo(User)

User.belongsToMany(Chat, { through: UserChat });
Chat.belongsToMany(User, { through: UserChat });

module.exports = {
    ...sequelize.models, 
    conn: sequelize,     
  };