<script lang="ts">
  import { selectedCategory } from "../../stores/optionsStore";
  import type { Category } from "../../types/category";
  import Option from "./Option.svelte";
  import { isPuzzleSolved } from "../../stores/puzzleStore";
  import { resolveIconImageByName } from "../../util/imgUtil";

  let currentPage = 0;
  const itemsPerPage = 12;

  $: allItems = $selectedCategory ? $selectedCategory.options : [];

  $: sortedItems = allItems.slice().sort((a, b) => {
    const aUnlocked = $isPuzzleSolved(a.puzzle);
    const bUnlocked = $isPuzzleSolved(b.puzzle);
    if (aUnlocked === bUnlocked) return 0;
    return aUnlocked ? -1 : 1;
  });

  $: totalItems = sortedItems.length;
  $: totalPages = Math.ceil(totalItems / itemsPerPage);
  $: displayedItems = sortedItems.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  $: if (currentPage >= totalPages) {
    currentPage = 0;
  }

  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
    }
  }

  function nextPage() {
    if (currentPage < totalPages - 1) {
      currentPage++;
    }
  }
</script>

<div class="options-panel">
  <div class="header">
    {#if currentPage > 0}
      <div
        class="navbutton"
        style="background-image: url({resolveIconImageByName(
          'icon_nav_left.png',
        )});"
        on:click={prevPage}
      />
    {:else}
      <div class="placeholder"/>
    {/if}

    <div class="category-name">
      {$selectedCategory!.name}
    </div>

    {#if currentPage < totalPages - 1}
      <div
        class="navbutton"
        style="background-image: url({resolveIconImageByName(
          'icon_nav_right.png',
        )});"
        on:click={nextPage}
      />
      {:else}
      <div class="placeholder"/>
    {/if}
  </div>

  <div class="options-container">
    {#each displayedItems as option}
      <Option {option} />
    {/each}
  </div>
</div>

<style>
  .options-panel {
    width: 46vw;
    height: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff88;
    border-radius: 0.5vw;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0vw 1vw;
    width: 40.5vw;
    margin-top: 0.7vw;
  }

  .options-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1vw;
    width: 43vw;
    margin-bottom: 1.5vw;
  }

  .navbutton {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 2vw;
    height: 2vw;
    margin-top: 0.5vw;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .placeholder {
    width: 2vw;
    height: 2vw;
  }
  .category-name {
    font-size: 3vw;
    color: var(--red-accent);
  }
</style>
