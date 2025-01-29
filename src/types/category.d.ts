import type { Option } from "./option";
import type { Slot } from "./slot";

export interface Category {
    name: string;
    asset: string;
    slot: Slot;
    options: Option[];
}