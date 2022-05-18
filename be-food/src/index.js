// load env
require("dotenv").config();

const express = require("express");
const router = require("./routers");
const cors = require("cors");
const morgan = require("morgan");

const { errorHandler, errorConverter } = require("./middlewares/global");

/**
 * middleware config
 * @param app - express instance
 */
const middleware = (app) => {
  app.use(express.json());
  app.use(morgan("combined"));

  app.use(cors({ origin: "*" }));

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Cross-Origin-Resource-Policy", "cross-origin");
    next();
  });

  // router
  app.use("/api/v1", router);

  app.use(errorConverter);
  app.use(errorHandler);
};

/**
 * initialize express application
 * @return app - express instance
 */
const bootstrap = () => {
  const app = express();

  // use middleware
  middleware(app);

  // default route
  app.get("/health-check", (req, res) => {
    res.send({ msg: "ok" });
  });

  return app;
};

module.exports = bootstrap;
