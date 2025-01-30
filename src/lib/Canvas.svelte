<script lang="ts">
  import { Slot } from "../types/slot";
  import CanvasElement from "./CanvasElement.svelte";

  // List of all slots
  const slots = [
    Slot.BACKGROUND,
    Slot.BACKGROUND_ELEMENT,
    Slot.BASE_BODY,
    Slot.HAIR,
    Slot.EYES,
    Slot.MOUTH,
    Slot.UNDERGARMENT,
    Slot.SOCK,
    Slot.SHOE,
    Slot.PANTS,
    Slot.TOP,
    Slot.DRESS,
    Slot.OUTERWEAR,
    Slot.ACCESSORY,
  ];
</script>

<div class="canvas">
  {#each slots as slot, index}
    <CanvasElement {slot} zIndex={index} />
  {/each}
</div>

<style>
  .canvas {
    height: 600px;
    width: 600px;
    background-color: blanchedalmond;
    position: relative; /* Allows elements inside to overlap */
    overflow: hidden;
  }
</style>
