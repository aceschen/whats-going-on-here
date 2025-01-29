import type { Category } from "../types/category";
import { Slot } from "../types/slot";
import { BASE_OPTIONS } from "./bases";
import { PANTS_OPTIONS } from "./pants";
import { SHOE_OPTIONS } from "./shoes";
import { TOP_OPTIONS } from "./tops";

export const CATEGORIES: Category[] = [
    {
        name: "Shoes",
        slot: Slot.SHOE,
        options: SHOE_OPTIONS,
    },
    {
        name: "Tops",
        slot: Slot.TOP,
        options: TOP_OPTIONS,
    },
    {
        name: "Pants",
        slot: Slot.PANTS,
        options: PANTS_OPTIONS,
    },
    {
        name: "Base",
        slot: Slot.BASE_BODY,
        options: BASE_OPTIONS,
    },

]