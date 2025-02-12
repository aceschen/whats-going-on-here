<script lang="ts">
  import { onMount } from "svelte";
  import OptionsPanel from "./lib/option/OptionsPanel.svelte";
  import Canvas from "./lib/canvas/Canvas.svelte";
  import PasswordPrompt from "./lib/modal/PasswordPrompt.svelte";
  import CategoryPanel from "./lib/category/CategoryPanel.svelte";
  import PuzzleModal from "./lib/modal/PuzzleModal.svelte";

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
    <container>
      <Canvas />
      <OptionsPanel />
    </container>
    <PuzzleModal />
    <CategoryPanel />
  </main>
{:else}
  <PasswordPrompt onAuthenticated={handleAuthentication} />
{/if}

<style>
  main {
    height: auto;
    width: max(90vw);
  }

  container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
