<script lang="ts">
  import {
    accessoryOptions,
    getStoreBySlot,
    setOptionState,
    unsetOptionState,
  } from "../../stores/optionsStore";
  import type { Option } from "../../types/option";
  import {
    getImageStyle,
    resolveIconImageByName,
    resolveImage,
  } from "../../util/imgUtil";
  import {
    currentAssociatedOption,
    currentPuzzle,
    isPuzzleSolved,
  } from "../../stores/puzzleStore";
  import { NON_REMOVABLE_SLOTS, Slot } from "../../types/slot";

  export let option: Option;

  $: optionImageUrl = resolveImage(option);
  $: lockedImageUrl = resolveIconImageByName("icon_heart.png");
  $: isUnlocked = $isPuzzleSolved(option.puzzle);

  $: imageStyle = getImageStyle(option);

  // roflcopter
  $: nonAccessoryStore =
    option.slot !== Slot.ACCESSORY ? getStoreBySlot(option.slot) : null;

  $: isSelected =
    option.slot === Slot.ACCESSORY
      ? Array.from($accessoryOptions).some((acc) => acc.name === option.name)
      : $nonAccessoryStore?.name === option.name;

  function selectUnlockedOption() {
    if (isSelected) {
      if (!NON_REMOVABLE_SLOTS.has(option.slot)) {
        unsetOptionState(option);
      }
    } else {
      setOptionState(option);
    }
  }

  function selectLockedOption() {
    currentPuzzle.set(option.puzzle);
    currentAssociatedOption.set(option);
  }
</script>

{#if isUnlocked}
  <div
    class="option-button {isSelected ? 'selected' : ''}"
    style="
      background-image: url({optionImageUrl}); 
      background-size: {imageStyle.backgroundSize}; 
      background-position-y: {imageStyle.backgroundPositionY};"
    on:click={selectUnlockedOption}
  />
{:else}
  <div
    class="option-button locked"
    style="background-image: url({lockedImageUrl});"
    on:click={selectLockedOption}
  />
{/if}

<style>
  .option-button {
    width: 100%;
    aspect-ratio: 1;
    background-color: aliceblue;
    background-repeat: no-repeat;
    background-position-x: center;
    border-radius: 5%;
    cursor: pointer;
    position: relative;
    overflow: visible;
  }

  .option-button.locked {
    background-size: 55%;
    background-position: center;
  }

  .option-button::after {
    content: "";
    position: absolute;
    top: -2%;
    left: -2%;
    right: -2%;
    bottom: -2%;
    border: min(0.5vw, 1vh) solid transparent;
    border-radius: 5%;
    pointer-events: none;
  }

  .option-button.selected::after {
    border-color: var(--red-accent);
  }
</style>
