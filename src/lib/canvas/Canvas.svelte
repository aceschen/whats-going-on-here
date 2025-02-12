<script lang="ts">
  import { Slot } from "../../types/slot";
  import CanvasElement from "./CanvasElement.svelte";

  const slots = [
    Slot.HAIR,
    Slot.FACE,
    Slot.SOCK,
    Slot.SHOE,
    Slot.BOTTOM,
    Slot.TOP,
    Slot.DRESS,
    Slot.OUTERWEAR,
    Slot.ACCESSORY,
  ];
</script>

<div class="canvas">
  <CanvasElement slot={Slot.BACKGROUND} zIndex={0} />

  <!--these should be the default assets: 
      base
      hair / long_black
      face / default
      top / old_coolsclub
      bottom / old_tinyshort
      background / old_offwhite
      nothing else (no socks/accessory/etc)
  -->

  {#each slots as slot, index}
    <CanvasElement {slot} zIndex={index + 2} />
  {/each}
</div>

<style>
  .canvas {
    width: 40vw;
    aspect-ratio: 1;
    background-color: blanchedalmond;
    border-radius: 4px;
    margin-right: 3.36vw;
    position: relative;
    overflow: hidden;
    box-sizing: border-box; /* Ensures width includes padding and borders */
  }
</style>
