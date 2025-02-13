import type { Option } from "../types/option";
import { Slot } from "../types/slot";

export const SHOE_OPTIONS: Option[] = [
  {
	name: "docs",
	asset: "docs.png",
	slot: Slot.SHOE,
  },
  {
	name: "horseboots",
	asset: "horseboots.png",
	slot: Slot.SHOE,
  },
  {
	name: "redboot",
	asset: "redboot.png",
	slot: Slot.SHOE,
  },
  {
	name: "clue_catslipper",
	asset: "clue_catslipper.png",
	slot: Slot.SHOE,
	puzzle: {
		id: "catslipperPuzzle",
		prompt: "this alpha version was all yours / in march of twenty twenty-four(s) ",
		password: "adventure",
		hint: "affair",
		location: {
		  locationText: "the original picrew",
		  locationUrl: "https://picrew.me/en/secret_image_maker/PWKh7IAyHubeeBTp"
		}
	},
  },
  {
	name: "old_af1",
	asset: "old_af1.png",
	slot: Slot.SHOE,
  },
  {
	name: "old_onitsuka",
	asset: "old_onitsuka.png",
	slot: Slot.SHOE,
  },
];
