const clientDB = require("../../database");
var jwt = require("jsonwebtoken");

const getNotes = (req, res) => {
  const { authorization } = req;
  try {
    const querySql = `SELECT * FROM USUARIOS`;
    clientDB.query(querySql, function (err, result) {
      if (err) {
        console.log("[ERROR]:\n" + err);
        res.status(400);
        res.send("hubo un error al traer el un post");

        throw err;
      }

      jwt.verify(authorization, "123t", function (err, decoded) {
        if (err) {
          console.log("[ERROR]:\n" + err);
          res.status(400);
          res.send("hubo un error al traer el un post");

          throw err;
        }

        res.status(200);
        res.json(result.rows);
        // err
        // decoded undefined
      });

      return;
    });
  } catch (error) {
    throw error;
  }
};

module.exports = getNotes;
