<script lang="ts">
  import { areAllPuzzlesSolved } from "../stores/puzzleStore";

</script>

<div>
  {#if $areAllPuzzlesSolved}
    Finished
  {:else}
    Hello
  {/if}
</div>

<style>
</style>
