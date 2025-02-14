<script lang="ts">
  import { areAllPuzzlesSolved } from "../stores/puzzleStore";
  import { exportCombinedImage, resolveBaseImage, resolveImage } from "../util/imgUtil";
  import { backgroundOption, hairOption, faceOption, topOption, sockOption, shoeOption, outerwearOption, dressOption, bottomOption, accessoryOptions } from "../stores/optionsStore";

  function onDownloadClick() {
    const imagePaths = [
      resolveImage($backgroundOption),
      resolveImage($hairOption),
      resolveImage($faceOption),
      resolveBaseImage(),
      resolveImage($sockOption),
      resolveImage($shoeOption),
      resolveImage($bottomOption),
      resolveImage($topOption),
      resolveImage($dressOption),
      resolveImage($outerwearOption),
      ...Array.from($accessoryOptions).map(accessory => resolveImage(accessory)),
    ];
    exportCombinedImage(imagePaths);
  }
</script>

<div>
  {#if $areAllPuzzlesSolved}
    Finished
    <div class="download-button" on:click={onDownloadClick}>

    </div>
  {:else}
    Hello
  {/if}
</div>

<style>
  .download-button {
    width: 40%;
    height: 20%;
    background-color: var(--red-accent);
    cursor: pointer;
  }
</style>
