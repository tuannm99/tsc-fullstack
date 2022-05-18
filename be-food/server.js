const bootstrap = require("./src");

const connectDatabase = require("./src/configs/db");

connectDatabase();

const port = 5000;

// running
bootstrap().listen(port, () => {
  console.log(`app running on port ${port}`);
});
