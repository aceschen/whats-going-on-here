<script lang="ts">
  import { getStoreBySlot } from "../../stores/optionsStore";
  import type { Slot } from "../../types/slot";
  import { resolveImage } from "../../util/imgUtil";

  export let imageUrl: string;
  export let zIndex: number;
</script>

<div
  class="canvas-element"
  style="background-image: url({imageUrl}); z-index: {zIndex};"
/>

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
