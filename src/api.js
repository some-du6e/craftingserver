import express from "express";

export function initapi(port, debug) {
  const app = express();

  app.get("/api", (req, res) => {
    res.json({ message: "Hello from the API!" });
  });
}

export function initwww(port, debug) {
  const app = express();

  app.use(express.static("www"));
  app.listen(port, () => {
    if (debug) {
      console.log(`Debug mode is ON`);
      console.log(`the shitter is running on http://localhost:${port}`);
    }
  });
}
