<script lang="ts">
  import { currentPuzzle, isHintActivated, markHintActivated, markPuzzleSolved } from "../../stores/puzzleStore";

  // The showHint variable isn't strictly necessary here because we can use an inline check.
  let enteredPassword = "";

  function closeModal() {
    enteredPassword = "";
    currentPuzzle.set(undefined);
  }

  function checkPassword() {
    if (enteredPassword === $currentPuzzle?.password) {
      alert("Correct password");
      markPuzzleSolved($currentPuzzle!);
      closeModal();
    } else {
      alert("Wrong password");
    }
  }

  function onShowHintClick() {
    markHintActivated($currentPuzzle!);
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

      {#if $currentPuzzle.hint}
        {#if $isHintActivated($currentPuzzle)}
          <!-- The hint is activated: show the hint text -->
          <p class="hint">Hint: {$currentPuzzle.hint}</p>
        {:else}
          <!-- The hint exists but isn't activated: show a button to activate it -->
          <button class="hint-button" on:click={onShowHintClick}>
            Show Hint
          </button>
        {/if}
      {/if}

      <input
        bind:value={enteredPassword}
        placeholder="Enter password"
        on:keydown={onPasswordKeydown}
      />
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
  }

  .modal {
    position: relative;
    background: white;
    color: black;
    padding: 2rem;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
  }

  .close-button {
    color: black;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
  }

  .hint {
    font-style: italic;
    margin: 1rem 0;
    color: #555;
  }

  .hint-button {
    display: block;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
</style>
