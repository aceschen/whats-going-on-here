<script lang="ts">
  import {
    selectedCategory,
  } from "../../stores/optionsStore";
  import {
    currentPuzzle,
    showCompletedModal,
  } from "../../stores/puzzleStore";
  import { Slot } from "../../types/slot";
  import ModalBase from "./ModalBase.svelte";

  function closeModal() {
    
    currentPuzzle.set(undefined);
  }

  function goHome() {
    closeModal();
    showCompletedModal.set(false);
    selectedCategory.set(undefined);
  }
</script>

{#if $showCompletedModal}
  <ModalBase onclose={closeModal}>
    <h2>You Win</h2>
    <div class="go-home" on:click={goHome}>
    </div>
  </ModalBase>
{/if}

<style>
  .go-home {
    background-color: var(--red-accent);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-left: 1rem;
  }

  .go-home:hover {
    cursor: pointer;
  }

  .go-home:active {
    background-color: #c45151;
  }
</style>
