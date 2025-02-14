import type { Option } from "../types/option";
import { Slot } from "../types/slot";

export const DRESS_OPTIONS: Option[] = [
  {
    name: "grad",
    asset: "grad.png",
    slot: Slot.DRESS,
    new: true,
  },
  {
    name: "holey",
    asset: "holey.png",
    slot: Slot.DRESS,
    new: true,
  },
  {
    name: "kiraku",
    asset: "kiraku.png",
    slot: Slot.DRESS,
    new: true,
  },
  {
    name: "strawberry",
    asset: "strawberry.png",
    slot: Slot.DRESS,
    new: true,
  },
  {
    name: "clue_bakerbeach",
    asset: "clue_bakerbeach.png",
    slot: Slot.DRESS,
    new: true,
    puzzle: {
      id: "bakerbeachPuzzle",
      prompt:
        "it's party time, our twenty-third! / but there's an extra line, i heard?",
      password: "baker",
      hint: "cooks cake",
      location: {
        locationText: "bday homecafe partiful",
        locationUrl: "https://partiful.com/e/YzXUfM9zQERbW2qcYbt2",
      },
    },
  },
  {
    name: "clue_howtovenusoverall",
    asset: "clue_howtovenusoverall.png",
    slot: Slot.DRESS,
    new: true,
    puzzle: {
      id: "htvPuzzle",
      prompt:
        "our green and orange matchmaker / has hidden something, i am sure",
      password: "archive",
      hint: "records",
      location: {
        locationText: "shm's site",
        locationUrl: "https://shmuh.co/",
      },
    },
  },
  {
    name: "clue_porcelaincatdress",
    asset: "clue_porcelaincatdress.png",
    slot: Slot.DRESS,
    new: true,
    puzzle: {
      id: "porcelaindressPuzzle",
      prompt:
        "it's nice today, and late june too / i want to look at leaves with you",
      password: "porcelain",
      hint: "circles of china",
      location: {
        locationText: "anicedaytoday, water lilies",
        locationUrl:
          "https://www.instagram.com/p/C87OFYOvkj2DvnJEx0RgRCoNZLgy0TV2hWFqfA0/?img_index=1",
      },
    },
  },
  {
    name: "clue_renfaire",
    asset: "clue_renfaire.png",
    slot: Slot.DRESS,
    new: true,
    puzzle: {
      id: "renfairePuzzle",
      prompt:
        "he's halfway round the world tonight / a friend that you last saw online",
      password: "renaissance",
      hint: "rebirth",
      location: {
        locationText: "henry's site",
        locationUrl: "https://qwook.io/",
      },
    },
  },
];
