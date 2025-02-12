<script lang="ts">
  import {
    clearOptionState,
    getStoreBySlot,
    setOptionState,
  } from "../../stores/optionsStore";
  import type { Option } from "../../types/option";
  import { resolveImage } from "../../util/imgUtil";
  import { currentPuzzle, isPuzzleSolved } from "../../stores/puzzleStore";

  export let option: Option;

  $: imageUrl = resolveImage(option);
  $: unlocked = $isPuzzleSolved(option.puzzle);

  // roflcopter
  $: selectedOption = getStoreBySlot(option.slot);
  $: isSelected = $selectedOption?.name == option.name;

  function selectOption() {
    if (unlocked) {
      if (isSelected) {
        clearOptionState(option.slot);
      } else {
        setOptionState(option);
      }
    } else {
      currentPuzzle.set(option.puzzle);
    }
  }
</script>

<div
  class="option-button {unlocked ? '' : 'locked'} {isSelected
    ? 'selected'
    : ''}"
  style="background-image: url({imageUrl});"
  on:click={selectOption}
/>

<style>
  .option-button {
    width: 100%;
    aspect-ratio: 1;
    background-color: aliceblue;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1vw;
    cursor: pointer;
    position: relative;
    overflow: visible;
    transition: all 0.3s ease;
  }

  .option-button::after {
    content: "";
    position: absolute;
    top: -0.35vw;
    left: -0.35vw;
    right: -0.35vw;
    bottom: -0.35vw;
    border: 0.5vw solid transparent;
    border-radius: 1.5vw;
    transition: border-color 0.3s ease;
    pointer-events: none; /* Ensure it doesn’t interfere with clicks */
  }

  .option-button.selected::after {
    border-color: var(--red-accent);
  }
</style>
