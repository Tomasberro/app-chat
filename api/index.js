const {app, httpserver} = require('./src/app.js');
const { conn } = require('./src/db.js');


const port =  3001;


conn.sync({ force: true}).then( () => {
  httpserver.listen(port, async () => {
    console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`); 
  });
}).catch((e) => console.log("connection failed", e));
// module.exports = server;