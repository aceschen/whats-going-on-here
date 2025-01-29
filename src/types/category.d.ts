import type { Option } from "./option";
import type { Slot } from "./slot";

export interface Category {
    name: string;
    slot: Slot;
    options: Option[];
}