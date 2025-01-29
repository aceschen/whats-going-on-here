<script lang="ts">
    import type { Slot } from "../types/slot";
    import { resolveImage } from "../util/imgUtil";
    import { getStoreBySlot } from "../util/stateUtil";

    export let slot: Slot;
    export let zIndex: number;

    const selectedStore = getStoreBySlot(slot);

    $: imageUrl = resolveImage($selectedStore)
</script>

<div 
    class="canvas-element" 
    style="background-image: url({imageUrl}); z-index: {zIndex};"

>
</div>

<style>
    .canvas-element {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>
