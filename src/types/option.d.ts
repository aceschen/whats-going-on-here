import type { Puzzle } from "./puzzle";
import type { Slot } from "./slot";

export interface Option {
  name: string;
  asset: string;
  slot: Slot;
  puzzle?: Puzzle;
}
