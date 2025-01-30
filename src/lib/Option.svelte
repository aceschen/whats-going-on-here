<script lang="ts">
  import { setOptionState, shoeOption } from "../stores/optionsStore";
  import type { Option } from "../types/option";
  import { resolveImage } from "../util/imgUtil";
  import { currentPuzzle, isPuzzleSolved } from "../stores/puzzleStore";

  export let option: Option;
  const imageUrl = resolveImage(option);
  $: unlocked = $isPuzzleSolved(option.puzzle);

  function selectOption() {
    if (unlocked) {
      setOptionState(option);
      console.log("Set option ", $shoeOption);
    } else {
      currentPuzzle.set(option.puzzle);
      console.log($currentPuzzle);
    }
  }
</script>

<button
  class="option-button {unlocked ? '' : 'locked'}"
  style="background-image: url({imageUrl});"
  on:click={selectOption}
>
  lol
</button>

<style>
  .option-button {
    height: 80px;
    width: 80px;
    background-color: aliceblue;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    cursor: pointer;
  }

  .option-button.locked {
    filter: grayscale(100%);
    opacity: 0.5;
  }
</style>
