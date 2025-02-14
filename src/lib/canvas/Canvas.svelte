<script lang="ts">
  import CanvasElement from "./CanvasElement.svelte";
  import CanvasElementBase from "./CanvasElementBase.svelte";
  import {
    backgroundOption,
    hairOption,
    faceOption,
    topOption,
    sockOption,
    shoeOption,
    outerwearOption,
    dressOption,
    bottomOption,
    accessoryOptions,
  } from "../../stores/optionsStore";
  import { resolveBaseImage } from "../../util/imgUtil";
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
  <CanvasElement option={$backgroundOption} zIndex={0} />
  <CanvasElement option={$hairOption} zIndex={1} />
  <CanvasElement option={$faceOption} zIndex={2} />

  <!-- Base image layer -->
  <CanvasElementBase imageUrl={resolveBaseImage()} zIndex={3} />

  <CanvasElement option={$sockOption} zIndex={4} />
  <CanvasElement option={$shoeOption} zIndex={5} />
  <CanvasElement option={$bottomOption} zIndex={6} />
  <CanvasElement option={$topOption} zIndex={7} />
  <CanvasElement option={$dressOption} zIndex={8} />
  <CanvasElement option={$outerwearOption} zIndex={9} />

  {#each Array.from($accessoryOptions) as accessory, i}
    <CanvasElement option={accessory} zIndex={10 + i} />
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
