import { LoremIpsum } from "lorem-ipsum";
import { randomUUID } from "crypto";
import { DeckModel } from "./models/deck";
import { CardModel } from "./models/card";

const loremGenerator = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

/*
  GENERATOR FUNCTIONS ==========================================================
 */

function generateDeck(): DeckModel {
  const nameLength = Math.floor(Math.random() * 5 + 1);

  const tagRand = Math.floor(Math.random() * 10 + 1);
  const tags = Array.from({ length: tagRand }, () =>
    loremGenerator.generateWords(1)
  );

  return {
    id: randomUUID(),
    name: loremGenerator.generateWords(nameLength),
    description: loremGenerator.generateSentences(1),
    tags: tags,
  };
}

function generateCard(deck: DeckModel): CardModel {
  const questionTagNum = Math.floor(Math.random() * 5);
  const questionTags = Array.from({ length: questionTagNum }, () =>
    loremGenerator.generateWords(2)
  );

  const answerTagNum = Math.floor(Math.random() * 5);
  const answerTags = Array.from({ length: answerTagNum }, () =>
    loremGenerator.generateWords(2)
  );

  return {
    id: randomUUID(),
    deckId: deck.id,
    question: {
      type: "text",
      tags: questionTags,
      content: loremGenerator.generateSentences(1),
      context: [loremGenerator.generateSentences(1)],
    },
    answer: {
      type: "text",
      tags: answerTags,
      content: loremGenerator.generateSentences(1),
      context: [loremGenerator.generateSentences(1)],
    },
  };
}

/*
  GENERATED DATA ===============================================================
 */

export const users: Map<string, string> = new Map([["test", "test"]]);

export const decks: Map<string, DeckModel> = new Map();
for (let i = 0; i < 50; i++) {
  const deck = generateDeck();
  decks.set(deck.id, deck);
}

export const deckCards: Map<string, CardModel[]> = new Map();
for (let deck of decks.values()) {
  const cards = Array.from({ length: 100 }, () => generateCard(deck));
  deckCards.set(deck.id, cards);
}
