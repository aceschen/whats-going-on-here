<script lang="ts">
  import {
    clearOptionState,
    getStoreBySlot,
    setOptionState,
  } from "../../stores/optionsStore";
  import type { Option } from "../../types/option";
  import { resolveImage } from "../../util/imgUtil";
  import { currentPuzzle, isPuzzleSolved } from "../../stores/puzzleStore";
  import { NON_REMOVABLE_SLOTS } from "../../types/slot";

  export let option: Option;

  $: imageUrl = resolveImage(option);
  $: isUnlocked = $isPuzzleSolved(option.puzzle);

  // roflcopter
  $: selectedOption = getStoreBySlot(option.slot);
  $: isSelected = $selectedOption?.name == option.name;

  function selectOption() {
    if (!isUnlocked) {
      currentPuzzle.set(option.puzzle);
      return;
    }

    if (isSelected) {
      if (!NON_REMOVABLE_SLOTS.has(option.slot)) {
        clearOptionState(option.slot);
      }
    } else {
      setOptionState(option);
    }
  }
</script>

<div
  class="option-button {isUnlocked ? '' : 'locked'} {isSelected
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
    border-radius: 0.5vw;
    cursor: pointer;
    position: relative;
    overflow: visible;
  }

  .option-button::after {
    content: "";
    position: absolute;
    top: -0.35vw;
    left: -0.35vw;
    right: -0.35vw;
    bottom: -0.35vw;
    border: 0.5vw solid transparent;
    border-radius: 0.5vw;
    pointer-events: none;
  }

  .option-button.selected::after {
    border-color: var(--red-accent);
  }
</style>
