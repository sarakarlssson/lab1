const express = require('express');
const db = require('./dbConnection.js');
const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/products", async (req, res) => {

    try {
        const sql = `SELECT * FROM products`
        const [rows, fields] = await db.execute(sql)
        res.json(rows);

    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }

})

app.listen(PORT, (err) => {
    if (err) {
        console.error("Server failed to start:", err);
    } else {
        console.log(`Server running on port http://localhost:${PORT}`);
    }
});