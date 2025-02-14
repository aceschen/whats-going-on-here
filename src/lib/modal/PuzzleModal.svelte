<script lang="ts">
  import {
    getStoreBySlot,
    setAccessoryOption,
  } from "../../stores/optionsStore";
  import {
    currentAssociatedOption,
    currentPuzzle,
    isHintActivated,
    isLocationActivated,
    markHintActivated,
    markLocationActivated,
    markPuzzleSolved,
  } from "../../stores/puzzleStore";
  import { Slot } from "../../types/slot";

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

  function onOverlayClick(event: MouseEvent) {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  }

  function onOverlayKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeModal();
    }
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
  <div
    class="modal-overlay"
    role="button"
    tabindex="0"
    on:click={onOverlayClick}
    on:keydown={onOverlayKeydown}
  >
    <div class="modal">
      <button
        class="close-button"
        on:click={closeModal}
        aria-label="Close dialog"
      >
        X
      </button>

      <h2>{$currentPuzzle.prompt}</h2>

      {#if $currentPuzzle.location}
        {#if $isLocationActivated($currentPuzzle)}
          <a href={$currentPuzzle.location.locationUrl} target="_blank"
            >puzzle location: {$currentPuzzle.location.locationText}</a
          >
        {:else}
          <button class="hint-button" on:click={onShowLocationClick}>
            show puzzle location
          </button>
        {/if}
      {/if}{#if $currentPuzzle.hint}
        {#if $isHintActivated($currentPuzzle)}
          <p class="hint">definition: {$currentPuzzle.hint}</p>
        {:else}
          <button class="hint-button" on:click={onShowHintClick}>
            show puzzle hint
          </button>
        {/if}
      {/if}

      <div class="submit-answer">
        <input
          class="answer-input"
          bind:value={enteredPassword}
          placeholder="puzzle answer"
          on:keydown={onPasswordKeydown}
        />
        <button class="submit-button" on:click={onPasswordClick}>
          {submitText}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    outline: none;
    text-align: left;
  }

  .modal {
    align-items: left;
    justify-content: left;
    position: relative;
    background: white;
    color: black;
    padding: 2rem;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
    border: solid var(--red-accent) 0.8rem;
  }

  .close-button {
    color: var(--red-accent);
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: transparent;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }

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
</style>
