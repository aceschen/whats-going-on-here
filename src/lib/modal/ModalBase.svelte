<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let onclose: () => void;

  function handleOverlayClick(event: MouseEvent) {
    if (event.currentTarget === event.target) {
      onclose();
    }
  }

  function handleOverlayKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onclose();
    }
  }
</script>

<div
  class="modal-overlay"
  role="button"
  tabindex="0"
  on:click={handleOverlayClick}
  on:keydown={handleOverlayKeydown}
>
  <div class="modal">
    <button class="close-button" on:click={onclose} aria-label="Close dialog">
      X
    </button>
    <slot />
  </div>
</div>

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
</style>
