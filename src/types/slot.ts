export const enum Slot {
  TOP = "TOP",
  SOCK = "SOCK",
  SHOE = "SHOE",
  OUTERWEAR = "OUTERWEAR",
  HAIR = "HAIR",
  FACE = "FACE",
  DRESS = "DRESS",
  BOTTOM = "BOTTOM",
  BACKGROUND = "BACKGROUND",
  ACCESSORY = "ACCESSORY",
}

export const NON_REMOVABLE_SLOTS: Set<Slot> = new Set([
  Slot.BACKGROUND,
  Slot.FACE,
  Slot.HAIR,
]);
