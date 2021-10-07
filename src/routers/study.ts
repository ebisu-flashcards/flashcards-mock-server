import express, { Request, Response } from "express";
import { randomInt } from "crypto";

import { deckCards } from "../database";

const router = express.Router();

function getRandomCard(req: Request, res: Response) {
  const cards = deckCards.get(req.params.deckId);
  if (cards === undefined) {
    res.sendStatus(404);
  } else {
    const nextIndex = randomInt(0, cards.length);
    res.json(cards[nextIndex]);
  }
}

router.get("/study/:deckId/next", getRandomCard);
router.post("/study/:deckId/next", getRandomCard);

export default router;
