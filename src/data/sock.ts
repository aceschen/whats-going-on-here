import type { Option } from "../types/option";
import { Slot } from "../types/slot";

export const SOCK_OPTIONS: Option[] = [
  {
    name: "black",
    asset: "black.png",
    slot: Slot.SOCK,
    new: true,
  },
  {
    name: "merino",
    asset: "merino.png",
    slot: Slot.SOCK,
    new: true,
  },
  {
    name: "pattern",
    asset: "pattern.png",
    slot: Slot.SOCK,
    new: true,
  },
  {
    name: "white",
    asset: "white.png",
    slot: Slot.SOCK,
    new: true,
  },
  {
    name: "clue_hellokitty",
    asset: "clue_hellokitty.png",
    slot: Slot.SOCK,
    new: true,
    puzzle: {
      id: "hellokittyPuzzle",
      prompt:
        "a saxophonist plays her part / five stars: a book close to your heart",
      password: "michigan",
      hint: "my home",
      location: {
        locationText: "a goodreads review for the rehearsal",
        locationUrl: "https://www.goodreads.com/review/show/7313965065",
      },
    },
  },
  {
    name: "clue_red",
    asset: "clue_red.png",
    slot: Slot.SOCK,
    new: true,
    puzzle: {
      id: "redsockPuzzle",
      prompt:
        "a BiD alum with colored hair / they lived in berkeley, painted there / a quote to breathe, to listen close / hold still and hover with your mouse",
      password: "tanghulu",
      hint: "sticky sweet",
      location: {
        locationText: "jingyi's murals, hover on a quote",
        locationUrl: "https://jingyi.me/proj/murals",
      },
    },
  },
  {
    name: "old_dogsquiggle",
    asset: "old_dogsquiggle.png",
    slot: Slot.SOCK,
  },
  {
    name: "old_eyes",
    asset: "old_eyes.png",
    slot: Slot.SOCK,
  },
  {
    name: "old_hamburger",
    asset: "old_hamburger.png",
    slot: Slot.SOCK,
  },
  {
    name: "old_heart",
    asset: "old_heart.png",
    slot: Slot.SOCK,
  },
  {
    name: "old_pizza",
    asset: "old_pizza.png",
    slot: Slot.SOCK,
  },
];
