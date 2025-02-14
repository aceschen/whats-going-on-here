import { derived, writable, type Writable } from "svelte/store";
import type { Option } from "../types/option";
import { Slot } from "../types/slot";
import type { Category } from "../types/category";
import { BACKGROUND_OPTIONS } from "../data/background";
import { TOP_OPTIONS } from "../data/top";
import { FACE_OPTIONS } from "../data/face";
import { HAIR_OPTIONS } from "../data/hair";
import { BOTTOM_OPTIONS } from "../data/bottom";
import { createPersistentSetStore, loadSet } from "../util/storageUtil";

const VIEWED_NEW_OPTIONS_STORAGE_KEY = "VIEWED_NEW_OPTIONS_SET";

const DEFAULT_FACE = FACE_OPTIONS[0];
const DEFAULT_HAIR = HAIR_OPTIONS[0];
const DEFAULT_TOP = TOP_OPTIONS[0];
const DEFAULT_BOTTOM = BOTTOM_OPTIONS[0];
const DEFAULT_BACKGROUND = BACKGROUND_OPTIONS[0];

export const selectedCategory = writable<Category | undefined>(undefined);

export const hairOption = writable<Option>(DEFAULT_HAIR);
export const faceOption = writable<Option>(DEFAULT_FACE);
export const topOption = writable<Option | undefined>(DEFAULT_TOP);
export const sockOption = writable<Option | undefined>(undefined);
export const shoeOption = writable<Option | undefined>(undefined);
export const outerwearOption = writable<Option | undefined>(undefined);
export const dressOption = writable<Option | undefined>(undefined);
export const bottomOption = writable<Option | undefined>(DEFAULT_BOTTOM);
export const backgroundOption = writable<Option>(DEFAULT_BACKGROUND);

// WOW
export const accessoryOptions = writable<Set<Option>>(new Set());

// Seed default items
const initialViewedNewOptions = loadSet(VIEWED_NEW_OPTIONS_STORAGE_KEY);

initialViewedNewOptions.add(DEFAULT_HAIR.name);
initialViewedNewOptions.add(DEFAULT_FACE.name);
initialViewedNewOptions.add(DEFAULT_TOP.name);
initialViewedNewOptions.add(DEFAULT_BOTTOM.name);
initialViewedNewOptions.add(DEFAULT_BACKGROUND.name);

export const viewedNewOptions = createPersistentSetStore(
  VIEWED_NEW_OPTIONS_STORAGE_KEY,
  initialViewedNewOptions,
);

export function markOptionViewed(option: Option) {
  viewedNewOptions.update((set) => {
    set.add(option.name);
    return set;
  });
}

export const isOptionViewed = derived(viewedNewOptions, ($viewedNewOptions) => {
  return (option: Option): boolean => {
    if (!option.new) return true;
    return $viewedNewOptions.has(option.name);
  };
});

function setStateBySlot(option: Option, slot: Slot) {
  switch (slot) {
    case Slot.HAIR:
      hairOption.set(option!);
      break;
    case Slot.FACE:
      faceOption.set(option!);
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
      backgroundOption.set(option!);
      break;
    case Slot.ACCESSORY:
      accessoryOptions.update((currentAccessories) => {
        // We need to create a whole ass new set to keep the object reactive
        const updatedAccessories = new Set(currentAccessories);
        updatedAccessories.add(option);
        return updatedAccessories;
      });
      break;
    default:
      console.warn(`Unhandled slot: ${slot}`);
  }
}

export function setOptionState(option: Option) {
  setStateBySlot(option, option.slot);
}

export function setAccessoryOption(option: Option) {
  if (option.slot !== Slot.ACCESSORY) {
    return console.warn(`Tried to set ${option.name} as ACCESSORY`);
  }

  accessoryOptions.update((currentAccessories) => {
    const updatedAccessories = new Set(currentAccessories);
    updatedAccessories.add(option);
    return updatedAccessories;
  });
}

export function unsetAccessoryOption(option: Option) {
  if (option.slot !== Slot.ACCESSORY) {
    return console.warn(
      `Tried to unset ${option.name} (${option.slot}) as ACCESSORY`,
    );
  }

  accessoryOptions.update((currentAccessories) => {
    // Don't mutate existing set ("best practice")
    const updatedAccessories = new Set(
      Array.from(currentAccessories).filter(
        (accessory) => accessory.name !== option.name,
      ),
    );
    return updatedAccessories;
  });
}

export function unsetOptionState(option: Option) {
  switch (option.slot) {
    case Slot.HAIR:
      hairOption.set(DEFAULT_HAIR);
      break;
    case Slot.FACE:
      faceOption.set(DEFAULT_FACE);
      break;
    case Slot.BACKGROUND:
      backgroundOption.set(DEFAULT_BACKGROUND);
      break;
    case Slot.TOP:
      topOption.set(undefined);
      break;
    case Slot.SOCK:
      sockOption.set(undefined);
      break;
    case Slot.SHOE:
      shoeOption.set(undefined);
      break;
    case Slot.OUTERWEAR:
      outerwearOption.set(undefined);
      break;
    case Slot.DRESS:
      dressOption.set(undefined);
      break;
    case Slot.BOTTOM:
      bottomOption.set(undefined);
      break;
    case Slot.ACCESSORY:
      unsetAccessoryOption(option);
      break;
    default:
      console.warn(
        `clearOptionState called for unhandled slot: ${option.slot}`,
      );
  }
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
    default:
      console.warn(`Unhandled slot in getStoreBySlot: ${slot}`);
      return backgroundOption;
  }
}
