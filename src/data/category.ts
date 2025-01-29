import type { Category } from "../types/category";
import { Slot } from "../types/slot";
import { SHOE_OPTIONS } from "./shoe";

export const CATEGORIES: Category[] = [
    {
        name: "shoes",
        asset: "placeholder.jpg",
        slot: Slot.SHOE,
        options: SHOE_OPTIONS,
    }

]