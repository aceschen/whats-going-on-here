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
    name: "Faces",
    slot: Slot.FACE,
    options: FACE_OPTIONS,
  },
  {
    name: "Shoes",
    slot: Slot.SHOE,
    options: SHOE_OPTIONS,
  },
  {
    name: "Tops",
    slot: Slot.TOP,
    options: TOP_OPTIONS,
  },
  {
    name: "Socks",
    slot: Slot.SOCK,
    options: SOCK_OPTIONS,
  },
  {
    name: "Outerwear",
    slot: Slot.OUTERWEAR,
    options: OUTERWEAR_OPTIONS,
  },
  {
    name: "Hair",
    slot: Slot.HAIR,
    options: HAIR_OPTIONS,
  },
  {
    name: "Dresses",
    slot: Slot.DRESS,
    options: DRESS_OPTIONS,
  },
  {
    name: "Bottoms",
    slot: Slot.BOTTOM,
    options: BOTTOM_OPTIONS,
  },
  {
    name: "Backgrounds",
    slot: Slot.BACKGROUND,
    options: BACKGROUND_OPTIONS,
  },
  {
    name: "Accessories",
    slot: Slot.ACCESSORY,
    options: ACCESSORY_OPTIONS,
  },
];
