import type { Option } from "../types/option";
import { Slot } from "../types/slot";

// This whole file is a bad idea??
// Whatever

const imagesBySlot: Record<Slot, Record<string, any>> = {
  TOP: import.meta.glob("/src/assets/top/*", { eager: true }) as Record<
    string,
    any
  >,
  SOCK: import.meta.glob("/src/assets/sock/*", { eager: true }) as Record<
    string,
    any
  >,
  SHOE: import.meta.glob("/src/assets/shoe/*", { eager: true }) as Record<
    string,
    any
  >,
  OUTERWEAR: import.meta.glob("/src/assets/outerwear/*", {
    eager: true,
  }) as Record<string, any>,
  HAIR: import.meta.glob("/src/assets/hair/*", { eager: true }) as Record<
    string,
    any
  >,
  FACE: import.meta.glob("/src/assets/face/*", { eager: true }) as Record<
    string,
    any
  >,
  DRESS: import.meta.glob("/src/assets/dress/*", { eager: true }) as Record<
    string,
    any
  >,
  BOTTOM: import.meta.glob("/src/assets/bottom/*", { eager: true }) as Record<
    string,
    any
  >,
  BACKGROUND: import.meta.glob("/src/assets/background/*", {
    eager: true,
  }) as Record<string, any>,
  ACCESSORY: import.meta.glob("/src/assets/accessory/*", {
    eager: true,
  }) as Record<string, any>,
};

const iconImages: Record<string, any> = import.meta.glob("/src/assets/icon/*", {
  eager: true,
});

function resolveFromImages(
  images: Record<string, any>,
  fileName: string | undefined,
): string {
  if (!fileName) return "";

  const matchingKey = Object.keys(images).find((key) =>
    key.endsWith(`/${fileName}`),
  );

  return matchingKey ? images[matchingKey]?.default || images[matchingKey] : "";
}

// awful
export function resolveIconImage(slot: Slot): string {
  return resolveFromImages(iconImages, `icon_${slot.toLowerCase()}.png`);
}

export function resolveIconImageByName(icon: string): string {
  return resolveFromImages(iconImages, icon);
}

export function resolveImage(option: Option | undefined): string {
  if (!option) return "";

  const images = imagesBySlot[option.slot];
  return images ? resolveFromImages(images, option.asset) : "";
}

export function getImageStyle(slot: Slot): { backgroundSize: string; backgroundPositionY: string } {
  switch (slot) {
    case Slot.HAIR:
    case Slot.FACE:
      return { backgroundSize: '250%', backgroundPositionY: '4%' };
    case Slot.OUTERWEAR:
    case Slot.TOP:
      return { backgroundSize: '150%', backgroundPositionY: '40%' };
    case Slot.SHOE:
    case Slot.SOCK:
      return { backgroundSize: '150%', backgroundPositionY: '165%' };
    case Slot.BOTTOM:
      return { backgroundSize: '200%', backgroundPositionY: '75%' };
    case Slot.ACCESSORY:
      return { backgroundSize: '55%', backgroundPositionY: '0%' };
    case Slot.DRESS:
    case Slot.BACKGROUND:
    default:
      return { backgroundSize: '100%', backgroundPositionY: '0%' };
  }
}
