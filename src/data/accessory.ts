import type { Option } from "../types/option";
import { Slot } from "../types/slot";

export const ACCESSORY_OPTIONS: Option[] = [
  // NECK + FACE
  {
    name: "chazubead",
    asset: "chazubead.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "glasses",
    asset: "glasses.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "jadeegg",
    asset: "jadeegg.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "partyhat",
    asset: "partyhat.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "sardine",
    asset: "sardine.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  // RIGHT HAND
  {
    name: "chocobear",
    asset: "chocobear.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "scrunchieblue",
    asset: "scrunchieblue.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "scrunchiepink",
    asset: "scrunchiepink.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "scrunchiewhite",
    asset: "scrunchiewhite.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  // LEFT HAND
  {
    name: "scrunchieplaid",
    asset: "scrunchieplaid.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "paintbrush",
    asset: "paintbrush.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "tulips",
    asset: "tulips.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  {
    name: "workbag",
    asset: "workbag.png",
    slot: Slot.ACCESSORY,
    new: true,
  },
  // CLUES
  {
    name: "clue_bluecrossbody",
    asset: "clue_bluecrossbody.png",
    slot: Slot.ACCESSORY,
    new: true,
    puzzle: {
      id: "bluecrossbodyPuzzle",
      prompt:
        "she's pure of heart and dumb of ass / five stars for you... this book",
      password: "adhering",
      hint: "sticking to",
      location: {
        locationText: "a goodreads review for a face like glass",
        locationUrl: "https://www.goodreads.com/review/show/7284607212",
      },
    },
  },
  {
    name: "clue_creamsoda",
    asset: "clue_creamsoda.png",
    slot: Slot.ACCESSORY,
    new: true,
    puzzle: {
      id: "creamsodaPuzzle",
      prompt:
        "i want a drink! a drink with fruit! / it's in a place where we compute",
      password: "matching",
      hint: "double",
      location: {
        locationText: "fruit computer, secret potion",
        locationUrl: "https://www.fruits.computer",
      },
    },
  },
  {
    name: "clue_jadestar",
    asset: "clue_jadestar.png",
    slot: Slot.ACCESSORY,
    new: true,
    puzzle: {
      id: "jadestarPuzzle",
      prompt:
        "he's asking us, 'well, what's the use?' / his site is one you should peruse / his work, it hides a mystery / and when you highlight, you will see",
      password: "fortune",
      hint: "wealth",
      location: {
        locationText: "eric's site, hidden line under creative work",
        locationUrl: "https://www.ericrawn.media/work",
      },
    },
  },
  {
    name: "old_chain",
    asset: "old_chain.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_airbods",
    asset: "old_airbods.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_chazudonut",
    asset: "old_chazudonut.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_dirtnecklace",
    asset: "old_dirtnecklace.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_dinonug",
    asset: "old_dinonug.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_eggbarrette",
    asset: "old_eggbarrette.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_emptybag",
    asset: "old_emptybag.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_greenbag",
    asset: "old_greenbag.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_icecream",
    asset: "old_icecream.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_pocky",
    asset: "old_pocky.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_ribbons",
    asset: "old_ribbons.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_scarf",
    asset: "old_scarf.png",
    slot: Slot.ACCESSORY,
  },
  {
    name: "old_starbag",
    asset: "old_starbag.png",
    slot: Slot.ACCESSORY,
  },
];
