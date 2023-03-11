require("dotenv").config();
const PORT = process.env.PORT;
const createConnection = (app) => {
  app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
  });
};
module.exports = createConnection;
