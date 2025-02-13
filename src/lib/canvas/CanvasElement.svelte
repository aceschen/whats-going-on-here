<script lang="ts">
  import { getStoreBySlot } from "../../stores/optionsStore";
  import type { Slot } from "../../types/slot";
  import { resolveImage } from "../../util/imgUtil";
  import CanvasElementBase from "./CanvasElementBase.svelte";

  export let slot: Slot;
  export let zIndex: number;

  const selectedStore = getStoreBySlot(slot);

  $: imageUrl = resolveImage($selectedStore);
</script>

<CanvasElementBase {imageUrl} {zIndex} />