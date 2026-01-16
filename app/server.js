const express = require("express");
const app = express();

app.get("/health", (_req, res) => res.json({ ok: true, ts: new Date().toISOString() }));
app.get("/", (_req, res) => res.send("CI/CD is live 🚀"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on ${port}`));
