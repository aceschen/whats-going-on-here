<script lang="ts">
  import { selectedCategory } from "../../stores/optionsStore";
  import { currentPuzzle, showCompletedModal } from "../../stores/puzzleStore";
  import { Slot } from "../../types/slot";
  import ModalBase from "./ModalBase.svelte";

  function closeModal() {
    currentPuzzle.set(undefined);
    showCompletedModal.set(false);
  }

  function goHome() {
    closeModal();
    showCompletedModal.set(false);
    selectedCategory.set(undefined);
  }
</script>

{#if $showCompletedModal}
  <ModalBase onclose={closeModal} class="modal">
    <h2>congratalions!</h2>
    <p>you solved all nineteen clues and unlocked all items! </p>
    <p>you can now download your avatar and view the final password!</p>
    <div class="go-home" on:click={goHome}>go home</div>
  </ModalBase>
{/if}

<style>
  p {
    color: #3d3d3d;
  }
  
  h2 {
    color: #3d3d3d;
  }

  .go-home {
    text-align: center;
    background-color: var(--red-accent);
    font-size: 1rem;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px; 
  }

  .go-home:hover {
    cursor: pointer;
  }

  .go-home:active {
    background-color: #c45151;
  }
</style>
