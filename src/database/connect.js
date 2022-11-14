const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster1.cgde6x2.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(`Erro: ${error}`);
      }
      return console.log("Conexão realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
