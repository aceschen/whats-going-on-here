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

export function resolveBaseImage() {
  const images: Record<string, any> = import.meta.glob("/src/assets/base.png", {
    eager: true,
  });
  return images["/src/assets/base.png"].default;
}

export function getImageStyle(option: Option) {
  switch (option.name) {
    // tops
    case "old_coolsclub": 
    case "alwayslate":
    case "greenribbontank":
    case "ginghamtank":
    case "clue_blackwhitetank":
    case "clue_denimtank":
    case "old_bluetank":
    case "old_knittop":
    case "old_littleblacktank":
    case "old_littletank":
      return { backgroundSize: "280%", backgroundPositionY: "40%" };
    case "kayla":
    case "peow":
      return { backgroundSize: "200%", backgroundPositionY: "40%" };
    // dresses
    case "kiraku":
    case "clue_porcelaincatdress":
      return { backgroundSize: "180%", backgroundPositionY: "45%" };
    // bottoms
    case "old_tinyshort":
    case "heartshorts":
      return { backgroundSize: "300%", backgroundPositionY: "65%" };
    case "clue_pearledskirt":
    case "old_denimskirt":
    case "old_cloudskirt":
      return { backgroundSize: "200%", backgroundPositionY: "90%" };
    case "old_tennis":
      return { backgroundSize: "250%", backgroundPositionY: "70%" };
    // accessories - right hand
    case "chocobear":
      return { backgroundSize: "500%", backgroundPositionX: "82%", backgroundPositionY: "57%"};
    case "old_icecream":
      return { backgroundSize: "500%", backgroundPositionX: "80%", backgroundPositionY: "57%"};
    case "scrunchieblue":
    case "scrunchiepink":
    case "scrunchiewhite":
      return { backgroundSize: "600%", backgroundPositionX: "75%", backgroundPositionY: "55%"};
    // accessories - left hand
    case "scrunchieplaid":
      return { backgroundSize: "600%", backgroundPositionX: "23%", backgroundPositionY: "55%"};
    case "clue_creamsoda":
      return { backgroundSize: "500%", backgroundPositionX: "16%", backgroundPositionY: "55%"};
    case "old_dinonug":
      return { backgroundSize: "300%", backgroundPositionX: "10%", backgroundPositionY: "55%"};
    case "paintbrush": 
    case "tulips":
      return { backgroundSize: "300%", backgroundPositionX: "10%", backgroundPositionY: "52%"};
    case "old_pocky":
      return { backgroundSize: "300%", backgroundPositionX: "7%", backgroundPositionY: "55%"};
    // accessories - neck 
    case "old_scarf": 
      return { backgroundSize: "120%", backgroundPositionY: "38%" };
    case "old_ribbons":
      return { backgroundSize: "200%", backgroundPositionY: "-20%" };
    case "chazubead": 
    case "old_chain":
    case "old_dirtnecklace":
    case "old_chazudonut":
    case "clue_jadestar":
      return { backgroundSize: "550%", backgroundPositionY: "34%" };
    case "jadeegg":
        return { backgroundSize: "550%", backgroundPositionY: "37%" };
    case "old_airbods":
      return { backgroundSize: "450%", backgroundPositionY: "32%" };
    // accessories - face
    case "glasses": 
      return { backgroundSize: "350%", backgroundPositionY: "11%" };
    case "partyhat": 
      return { backgroundSize: "350%", backgroundPositionY: "-8%", backgroundPositionX: "45%" };
    case "sardine": 
      return { backgroundSize: "600%", backgroundPositionY: "12%", backgroundPositionX: "41%" };
    case "old_eggbarrette":
      return { backgroundSize: "600%", backgroundPositionY: "6%", backgroundPositionX: "60%" };
    // accessories - bags
    case "old_starbag": 
    case "workbag":
      return { backgroundSize: "200%", backgroundPositionX: "65%", backgroundPositionY: "50%"};
    case "clue_bluecrossbody":
      return { backgroundSize: "160%", backgroundPositionX: "35%", backgroundPositionY: "50%"};
    case "old_greenbag":
    case "old_emptybag":
      return { backgroundSize: "200%", backgroundPositionX: "35%", backgroundPositionY: "50%"};
  
  
    default:
      return getImageSlotStyle(option.slot);
  }
}

function getImageSlotStyle(slot: Slot): {
  backgroundSize: string;
  backgroundPositionY: string;
} {
  switch (slot) {
    case Slot.HAIR:
    case Slot.FACE:
      return { backgroundSize: "250%", backgroundPositionY: "4%" };
    case Slot.OUTERWEAR:
    case Slot.TOP:
      return { backgroundSize: "170%", backgroundPositionY: "40%" };
    case Slot.SHOE:
    case Slot.SOCK:
      return { backgroundSize: "170%", backgroundPositionY: "135%" };
    case Slot.BOTTOM:
      return { backgroundSize: "190%", backgroundPositionY: "100%" };
    case Slot.ACCESSORY:
      return { backgroundSize: "120%", backgroundPositionY: "-30%" };
    case Slot.DRESS:
      return { backgroundSize: "120%", backgroundPositionY: "100%" };
    case Slot.BACKGROUND:
    default:
      return { backgroundSize: "100%", backgroundPositionY: "0%" };
  }
}

async function combineImages(imagePaths: string[]): Promise<string> {
  const validPaths = imagePaths.filter((path) => path.trim() !== "");

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas context not available");

  const images = await Promise.all(validPaths.map(loadImage));

  canvas.width = images[0].width;
  canvas.height = images[0].height;

  images.forEach((img) => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });

  return canvas.toDataURL("image/png");
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    console.log("Loading image:", src); // Debug log
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = (e) => {
      console.error("Failed to load image:", src, e);
      reject(e);
    };
  });
}

export async function exportCombinedImage(imagePaths: string[]): Promise<void> {
  try {
    const combinedImageUrl = await combineImages(imagePaths);
    const link = document.createElement("a");
    link.href = combinedImageUrl;
    link.download = "buildabel.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error exporting combined image:", error);
  }
}
