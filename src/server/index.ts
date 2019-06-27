import express from "express";
import next from "next";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("/items", (req, res) => {
    return app.render(req, res, "/Items", req.query);
  });

  server.get("/items/:id", (req, res) => {
    return app.render(req, res, "/ItemsId", { id: req.params.id });
  });

  server.get("/transaction/buy", (req, res) => {
    return app.render(req, res, "/TransactionBuy", { id: req.query.itemId });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
