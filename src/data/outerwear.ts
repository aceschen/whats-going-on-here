import type { Option } from "../types/option";
import { Slot } from "../types/slot";

export const OUTERWEAR_OPTIONS: Option[] = [
  {
    name: "animegirl",
    asset: "animegirl.png",
    slot: Slot.OUTERWEAR,
    new: true,
  },
  {
    name: "blueembroidery",
    asset: "blueembroidery.png",
    slot: Slot.OUTERWEAR,
    new: true,
  },
  {
    name: "horsepattern",
    asset: "horsepattern.png",
    slot: Slot.OUTERWEAR,
    new: true,
  },
  {
    name: "clue_leather",
    asset: "clue_leather.png",
    slot: Slot.OUTERWEAR,
    new: true,
    puzzle: {
      id: "leatherPuzzle",
      prompt:
        "it's party time, a friday night! / we made so many meatless pies",
      password: "soup",
      hint: "viand",
      location: {
        locationText: "luck homecafe partiful",
        locationUrl: "https://partiful.com/e/O6A96RjBanKYIqWSzVt8",
      },
    },
  },
  {
    name: "old_bomber",
    asset: "old_bomber.png",
    slot: Slot.OUTERWEAR,
  },
  {
    name: "old_browncardigan",
    asset: "old_browncardigan.png",
    slot: Slot.OUTERWEAR,
  },
  {
    name: "old_denim",
    asset: "old_denim.png",
    slot: Slot.OUTERWEAR,
  },
  {
    name: "old_shinyleather",
    asset: "old_shinyleather.png",
    slot: Slot.OUTERWEAR,
  },
  {
    name: "old_whitecardigan",
    asset: "old_whitecardigan.png",
    slot: Slot.OUTERWEAR,
  },
];
