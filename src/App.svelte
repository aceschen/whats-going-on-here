<script lang="ts">
  import { onMount } from "svelte";
  import OptionsPanel from "./lib/OptionsPanel.svelte";
  import Canvas from "./lib/Canvas.svelte";
  import PuzzleModal from "./lib/PuzzleModal.svelte";
  import PasswordPrompt from "./lib/PasswordPrompt.svelte";

  let isAuthenticated = false;

  onMount(() => {
    isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  });

  function handleAuthentication() {
    isAuthenticated = true;
  }
</script>

{#if isAuthenticated}
  <main>
    <div class="container">
      <Canvas />
      <OptionsPanel />
      <PuzzleModal />
    </div>
  </main>
{:else}
  <PasswordPrompt onAuthenticated={handleAuthentication} />
{/if}

<style>
  main {
    text-align: center;
    margin-top: 2rem;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 1rem;
  }
</style>
