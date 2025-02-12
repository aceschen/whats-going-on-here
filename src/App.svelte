<script lang="ts">
  import { onMount } from "svelte";
  import OptionsPanel from "./lib/option/OptionsPanel.svelte";
  import Canvas from "./lib/canvas/Canvas.svelte";
  import PasswordPrompt from "./lib/modal/PasswordPrompt.svelte";
  import CategoryPanel from "./lib/category/CategoryPanel.svelte";

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
    align-items: flex-end;
  }
</style>
