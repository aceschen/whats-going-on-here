import { writable, type Writable } from "svelte/store";
import type { Option } from "../types/option";
import { Slot } from "../types/slot";
import type { Category } from "../types/category";
import { CATEGORIES } from "../data/category";

// Selected category store
export const selectedCategory = writable<Category>(CATEGORIES[0]);

// Stores for each slot
export const hairOption = writable<Option | undefined>(undefined);
export const faceOption = writable<Option | undefined>(undefined);
export const topOption = writable<Option | undefined>(undefined);
export const sockOption = writable<Option | undefined>(undefined);
export const shoeOption = writable<Option | undefined>(undefined);
export const outerwearOption = writable<Option | undefined>(undefined);
export const dressOption = writable<Option | undefined>(undefined);
export const bottomOption = writable<Option | undefined>(undefined);
export const backgroundOption = writable<Option | undefined>(undefined);
export const accessoryOption = writable<Option | undefined>(undefined);

// Helper function to set state by slot
function setStateBySlot(option: Option | undefined, slot: Slot) {
  switch (slot) {
    case Slot.HAIR:
      hairOption.set(option);
      break;
    case Slot.FACE:
      faceOption.set(option);
      break;
    case Slot.TOP:
      topOption.set(option);
      break;
    case Slot.SOCK:
      sockOption.set(option);
      break;
    case Slot.SHOE:
      shoeOption.set(option);
      break;
    case Slot.OUTERWEAR:
      outerwearOption.set(option);
      break;
    case Slot.DRESS:
      dressOption.set(option);
      break;
    case Slot.BOTTOM:
      bottomOption.set(option);
      break;
    case Slot.BACKGROUND:
      backgroundOption.set(option);
      break;
    case Slot.ACCESSORY:
      accessoryOption.set(option);
      break;
    default:
      console.warn(`Unhandled slot: ${slot}`);
  }
}

// Public functions to interact with slot-specific stores
export function setOptionState(option: Option) {
  setStateBySlot(option, option.slot);
}

export function clearOptionState(slot: Slot) {
  setStateBySlot(undefined, slot);
}

export function getStoreBySlot(slot: Slot): Writable<Option | undefined> {
  switch (slot) {
    case Slot.HAIR:
      return hairOption;
    case Slot.FACE:
      return faceOption;
    case Slot.TOP:
      return topOption;
    case Slot.SOCK:
      return sockOption;
    case Slot.SHOE:
      return shoeOption;
    case Slot.OUTERWEAR:
      return outerwearOption;
    case Slot.DRESS:
      return dressOption;
    case Slot.BOTTOM:
      return bottomOption;
    case Slot.BACKGROUND:
      return backgroundOption;
    case Slot.ACCESSORY:
      return accessoryOption;
    default:
      console.warn(`Unhandled slot in getStoreBySlot: ${slot}`);
      return backgroundOption;
  }
}
