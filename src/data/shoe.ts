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
		id: "catslipper_puzzle",
		prompt: "this alpha version was all yours / in march of twenty twenty-four(s) ",
		password: "adventure",
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
