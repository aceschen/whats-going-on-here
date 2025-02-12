import type { Category } from "../types/category";
import { Slot } from "../types/slot";
import { FACE_OPTIONS } from "./face";
import { SHOE_OPTIONS } from "./shoe";
import { TOP_OPTIONS } from "./top";
import { SOCK_OPTIONS } from "./sock";
import { OUTERWEAR_OPTIONS } from "./outerwear";
import { HAIR_OPTIONS } from "./hair";
import { DRESS_OPTIONS } from "./dress";
import { BOTTOM_OPTIONS } from "./bottom";
import { BACKGROUND_OPTIONS } from "./background";
import { ACCESSORY_OPTIONS } from "./accessory";

export const CATEGORIES: Category[] = [
  {
    name: "faces",
    slot: Slot.FACE,
    options: FACE_OPTIONS,
  },
  {
    name: "hair",
    slot: Slot.HAIR,
    options: HAIR_OPTIONS,
  },
  {
    name: "tops",
    slot: Slot.TOP,
    options: TOP_OPTIONS,
  },
  {
    name: "outerwear",
    slot: Slot.OUTERWEAR,
    options: OUTERWEAR_OPTIONS,
  },
  {
    name: "dresses",
    slot: Slot.DRESS,
    options: DRESS_OPTIONS,
  },
  {
    name: "bottoms",
    slot: Slot.BOTTOM,
    options: BOTTOM_OPTIONS,
  },
  {
    name: "socks",
    slot: Slot.SOCK,
    options: SOCK_OPTIONS,
  },
  {
    name: "shoes",
    slot: Slot.SHOE,
    options: SHOE_OPTIONS,
  },
  {
    name: "accessories",
    slot: Slot.ACCESSORY,
    options: ACCESSORY_OPTIONS,
  },
  {
    name: "backgrounds",
    slot: Slot.BACKGROUND,
    options: BACKGROUND_OPTIONS,
  },
];
