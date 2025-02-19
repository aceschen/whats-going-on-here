<script lang="ts">
  import {
    getStoreBySlot,
    setAccessoryOption,
  } from "../../stores/optionsStore";
  import {
    areAllPuzzlesSolved,
    currentAssociatedOption,
    currentPuzzle,
    isHintActivated,
    isLocationActivated,
    markHintActivated,
    markLocationActivated,
    markPuzzleSolved,
    showCompletedModal,
  } from "../../stores/puzzleStore";
  import { Slot } from "../../types/slot";
  import ModalBase from "./ModalBase.svelte";

  let enteredPassword = "";
  let submitText = "submit";

  function closeModal() {
    enteredPassword = "";
    currentPuzzle.set(undefined);
    submitText = "submit";
  }

  function checkPassword() {
    if (enteredPassword === $currentPuzzle?.password) {
      markPuzzleSolved($currentPuzzle!);
      if ($areAllPuzzlesSolved) {
        console.log("Done");
        showCompletedModal.set(true);
      }

      const option = $currentAssociatedOption!;
      if (option.slot === Slot.ACCESSORY) {
        setAccessoryOption(option);
      } else {
        const store = getStoreBySlot(option.slot);
        store.set(option);
      }
      closeModal();
    } else {
      submitText = "try again";
    }
  }

  function onShowHintClick() {
    markHintActivated($currentPuzzle!);
  }

  function onShowLocationClick() {
    markLocationActivated($currentPuzzle!);
  }

  function onPasswordKeydown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      checkPassword();
    }
  }

  function onPasswordClick(event: MouseEvent) {
    if (event.currentTarget === event.target) {
      checkPassword();
    }
  }
</script>

{#if $currentPuzzle}
  <ModalBase onclose={closeModal}>
    <h2>{$currentPuzzle.prompt}</h2>

    {#if $currentPuzzle.location}
      {#if $isLocationActivated($currentPuzzle)}
        <a href={$currentPuzzle.location.locationUrl} target="_blank">
          clue location: {$currentPuzzle.location.locationText}
        </a>
      {:else}
        <button class="hint-button" on:click={onShowLocationClick}>
          reveal clue location
        </button>
      {/if}
    {/if}

    {#if $currentPuzzle.hint}
      {#if $isHintActivated($currentPuzzle)}
        <p class="hint">definition: {$currentPuzzle.hint}</p>
      {:else}
        <button class="hint-button" on:click={onShowHintClick}>
          reveal clue hint
        </button>
      {/if}
    {/if}

    <div class="submit-answer">
      <input
        class="answer-input"
        bind:value={enteredPassword}
        placeholder="cryptic crossword clue answer"
        on:keydown={onPasswordKeydown}
      />
      <button class="submit-button" on:click={onPasswordClick}>
        {submitText}
      </button>
    </div>
  </ModalBase>
{/if}

<style>
  .hint {
    font-style: italic;
    margin: 1rem 0;
    color: var(--red-accent);
  }

  .hint-button {
    display: block;
    margin: 1rem 0;
    font-size: 1rem;
    cursor: pointer;
    background-color: white;
    color: #3d3d3d;
  }

  .answer-input {
    font-family: "Darumadrop";
    font-size: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 4px;
    border: solid var(--red-accent);
    width: 60%;
  }

  .answer-input:focus {
    font-family: "Darumadrop";
    padding: 0.5rem;
    border-radius: 4px;
    border: solid var(--red-accent);
    outline: none;
  }

  .submit-button {
    background-color: var(--red-accent);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-left: 1rem;
  }

  .submit-button:hover {
    cursor: pointer;
  }

  .submit-button:active {
    background-color: #c45151;
  }

  a {
    text-decoration: underline;
    color: var(--red-accent);
  }
  
  p {
    color: #3d3d3d;
  }
  
  h2 {
    color: #3d3d3d;
  }
</style>
