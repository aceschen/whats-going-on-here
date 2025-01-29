import { writable } from "svelte/store";
import type { Option } from "../types/option";

export const eyesOption = writable<Option | undefined>(undefined);
export const mouthOption = writable<Option | undefined>(undefined);
export const hairOption = writable<Option | undefined>(undefined);
export const topOption = writable<Option | undefined>(undefined);
export const outerwearOption = writable<Option | undefined>(undefined);
export const dressOption = writable<Option | undefined>(undefined);
export const pantsOption = writable<Option | undefined>(undefined);
export const sockOption = writable<Option | undefined>(undefined);
export const shoeOption = writable<Option | undefined>(undefined);
export const undergarmentsOption = writable<Option | undefined>(undefined);
export const baseBodyOption = writable<Option | undefined>(undefined);
export const backgroundElementsOption = writable<Option | undefined>(undefined);
export const backgroundOption = writable<Option | undefined>(undefined);
export const accessoriesOptions = writable<Option | undefined>(undefined);
