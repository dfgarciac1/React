const mongoose= require("mongoose");
const URI='mongodb://172.18.0.1/mernstack';

mongoose.connect(URI,
  {
  useNewUrlParser: true, useUnifiedTopology: true
});

const connection= mongoose.connection;

connection.once('open',() => {
     console.log("La base de datos funciona");
});
