import { Slot } from "../types/slot";
import type { Option } from "../types/option";
import { 
    eyesOption, mouthOption, hairOption, topOption, outerwearOption, dressOption,
    pantsOption, sockOption, shoeOption, undergarmentsOption, baseBodyOption,
    backgroundElementsOption, backgroundOption, accessoriesOptions 
} from "../stores/selectedOptions";
import type { Writable } from "svelte/store";

function setStateBySlot(option: Option | undefined, slot: Slot) {
    switch (slot) {
        case Slot.EYES:
            eyesOption.set(option);
            break;
        case Slot.MOUTH:
            mouthOption.set(option);
            break;
        case Slot.HAIR:
            hairOption.set(option);
            break;
        case Slot.TOP:
            topOption.set(option);
            break;
        case Slot.OUTERWEAR:
            outerwearOption.set(option);
            break;
        case Slot.DRESS:
            dressOption.set(option);
            break;
        case Slot.PANTS:
            pantsOption.set(option);
            break;
        case Slot.SOCK:
            sockOption.set(option);
            break;
        case Slot.SHOE:
            shoeOption.set(option);
            break;
        case Slot.UNDERGARMENT:
            undergarmentsOption.set(option);
            break;
        case Slot.BASE_BODY:
            baseBodyOption.set(option);
            break;
        case Slot.BACKGROUND_ELEMENT:
            backgroundElementsOption.set(option);
            break;
        case Slot.BACKGROUND:
            backgroundOption.set(option);
            break;
        case Slot.ACCESSORY:
            accessoriesOptions.set(option); // Assuming accessoriesOptions holds multiple options
            break;
        default:
            console.warn(`Unhandled slot: ${slot}`);
    }
}

export function setOptionState(option: Option) {
    setStateBySlot(option, option.slot);
}

export function clearOptionState(slot: Slot) {
    setStateBySlot(undefined, slot);
}

export function getStoreBySlot(slot: Slot): Writable<Option | undefined> {
    switch (slot) {
        case Slot.EYES:
            return eyesOption;
        case Slot.MOUTH:
            return mouthOption;
        case Slot.HAIR:
            return hairOption;
        case Slot.TOP:
            return topOption;
        case Slot.OUTERWEAR:
            return outerwearOption;
        case Slot.DRESS:
            return dressOption;
        case Slot.PANTS:
            return pantsOption;
        case Slot.SOCK:
            return sockOption;
        case Slot.SHOE:
            return shoeOption;
        case Slot.UNDERGARMENT:
            return undergarmentsOption;
        case Slot.BASE_BODY:
            return baseBodyOption;
        case Slot.BACKGROUND_ELEMENT:
            return backgroundElementsOption;
        case Slot.ACCESSORY:
            return accessoriesOptions;
        case Slot.BACKGROUND:
        default:
            return backgroundOption;
            // screw the unhandled case
    }
}
