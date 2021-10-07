import express from "express";

import deckRouter from "./routers/deck";
import studyRouter from "./routers/study";
import authRouter from "./routers/auth";

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3001;

app.use("/api", deckRouter);
app.use("/api", studyRouter);
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Flashcard mock server is running at http://localhost:${port}`);
});
