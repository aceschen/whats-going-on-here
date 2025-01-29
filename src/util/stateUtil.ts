import { Slot } from "../types/slot";
import type { Option } from "../types/option";
import { 
    eyesOption, mouthOption, hairOption, topOption, outerwearOption, dressOption,
    pantsOption, sockOption, shoeOption, undergarmentsOption, baseBodyOption,
    backgroundElementsOption, backgroundOption, accessoriesOptions 
} from "../stores/selectedOptions";

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
        case Slot.UNDERGARMENTS:
            undergarmentsOption.set(option);
            break;
        case Slot.BASE_BODY:
            baseBodyOption.set(option);
            break;
        case Slot.BACKGROUND_ELEMENTS:
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
