import type { Location } from "./location";

export interface Puzzle {
  id: string;
  prompt: string;
  password: string;
  hint?: string;
  location?: Location;
}
