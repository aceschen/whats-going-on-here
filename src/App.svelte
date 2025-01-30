<script lang="ts">
  import { onMount } from "svelte";
  import PasswordPrompt from "./lib/PasswordPrompt.svelte";
  import OptionsPanel from "./lib/OptionsPanel.svelte";
  import Canvas from "./lib/Canvas.svelte";
    import PuzzleModal from "./lib/PuzzleModal.svelte";

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

  /* Flex container for horizontal layout */
  .container {
    display: flex;
    justify-content: space-between; /* Adjust spacing */
    align-items: stretch; /* Align items vertically */
    gap: 1rem; /* Adds space between the elements */
  }

</style>
