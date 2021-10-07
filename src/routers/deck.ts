import express from "express";
import { decks, deckCards } from "../database";

const router = express.Router();

router.get("/decks", (req, res) => {
  res.json([...decks.values()]);
});

router.get("/deck/:deckId", (req, res) => {
  const deck = decks.get(req.params.deckId);
  if (deck === undefined) {
    res.sendStatus(404);
  } else {
    res.json(deck);
  }
});

router.get("/deck/:deckId/cards", (req, res) => {
  const cards = deckCards.get(req.params.deckId);

  if (cards === undefined) {
    res.sendStatus(404);
  } else {
    res.json(cards);
  }
});

export default router;
