const router = require("express").Router();
const sqlConnection = require("../../database");
const uuid = require("uuid");

// @ GET
// All Articles
router.get("/all/:page", async (req, res) => {
  await sqlConnection.query(
    `SELECT * FROM articles ORDER BY created_at DESC LIMIT ${req.params.page}`,
    (err, result, fields) => {
      if (err) throw err;

      res.json(result);
    }
  );
});

// @ GET
// Get Article by ID
router.get("/:id", (req, res) => {
  sqlConnection.query(
    `SELECT * FROM articles WHERE id = '${req.params.id}'`,
    (err, result, fields) => {
      if (err) throw err;

      res.json(result);
    }
  );
});

// @ DELETE
// DELETE Article BY ID
router.delete("/:id", (req, res) => {
  const sql = `DELETE FROM articles WHERE id = '${req.params.id}'`;
  sqlConnection.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

// @ POST
// CREATE NEW Article
router.post("/create", (req, res) => {
  const { title, type, content } = req.body;

  const sql = `INSERT INTO articles (id, title, type, content) VALUES ('${uuid.v4()}','${title}', '${type}', '${content}')`;

  sqlConnection.query(sql, (err, result, fields) => {
    if (err) throw err;

    res.json(result);
  });
});

// @ UPDATE
// Update Article BY ID
router.put("/:id", (req, res) => {
  const { title } = req.body;

  const sql = `UPDATE articles SET title = '${title}' WHERE id = '${req.params.id}'`;

  // const sql = `DELETE FROM articles WHERE id = '${req.params.id}'`;
  sqlConnection.query(sql, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

module.exports = router;
