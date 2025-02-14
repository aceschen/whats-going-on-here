<script lang="ts">
  import { onMount } from "svelte";
  import OptionsPanel from "./lib/option/OptionsPanel.svelte";
  import Canvas from "./lib/canvas/Canvas.svelte";
  import PasswordPrompt from "./lib/modal/PasswordPrompt.svelte";
  import CategoryPanel from "./lib/category/CategoryPanel.svelte";
  import PuzzleModal from "./lib/modal/PuzzleModal.svelte";
  import { selectedCategory } from "./stores/optionsStore";
  import Home from "./lib/Home.svelte";
  import CompletedModal from "./lib/modal/CompletedModal.svelte";

  let isAuthenticated = false;
  // It actually just makes sense to preload everything immediately
  // So the everything really was a bad idea
  const images = import.meta.glob('/src/assets/*/*.png', { eager: true });

  onMount(() => {
    isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    Object.values(images).forEach((module: any) => {
      const url = module.default || module;
      const img = new Image();
      img.src = url;
    });
  })

  function handleAuthentication() {
    isAuthenticated = true;
  }
</script>

<main>
  {#if isAuthenticated}
    <container>
      <Canvas />
      {#if $selectedCategory}
        <OptionsPanel />
      {:else}
        <Home />
      {/if}
    </container>
    <PuzzleModal />
    <CompletedModal />
    <CategoryPanel />
  {:else}
    <PasswordPrompt onAuthenticated={handleAuthentication} />
  {/if}
</main>

<style>
  main {
    aspect-ratio: 1.5;
    width: min(90vw, calc(100vh * 1.5));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  container {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
