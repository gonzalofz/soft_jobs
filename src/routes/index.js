const notesRoutes = require("./user");

const middlewares = (app) => {
  app.use("/api/v1", notesRoutes);
};

module.exports = middlewares;
