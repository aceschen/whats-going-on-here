<script lang="ts">
  import { Slot } from "../../types/slot";
  import CanvasElement from "./CanvasElement.svelte";
  import CanvasElementBase from "./CanvasElementBase.svelte";

  const slots = [
    Slot.SOCK,
    Slot.SHOE,
    Slot.BOTTOM,
    Slot.TOP,
    Slot.DRESS,
    Slot.OUTERWEAR,
    Slot.ACCESSORY,
  ];

  // Lol
  const images: Record<string, any> = import.meta.glob("/src/assets/base.png", {
    eager: true,
  });
  const baseImage = images["/src/assets/base.png"].default;
</script>

<div class="canvas">
  <!--these should be the default assets: 
      base
      hair / long_black
      face / default
      top / old_coolsclub
      bottom / old_tinyshort
      background / old_offwhite
      nothing else (no socks/accessory/etc)
  -->
  <CanvasElement slot={Slot.BACKGROUND} zIndex={0} />
  <CanvasElement slot={Slot.HAIR} zIndex={1} />
  <CanvasElement slot={Slot.FACE} zIndex={2} />
  <CanvasElementBase imageUrl={baseImage} zIndex={3} />
  {#each slots as slot, index}
    <CanvasElement {slot} zIndex={index + 3} />
  {/each}
</div>

<style>
  .canvas {
    height: 96%;
    aspect-ratio: 1;
    border-radius: 2%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
