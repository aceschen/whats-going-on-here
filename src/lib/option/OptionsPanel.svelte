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
    currentPage * itemsPerPage + itemsPerPage
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
        style="background-image: url({resolveIconImageByName('icon_nav_left.png')});"
        on:click={prevPage}
      />
    {/if}

    {#if currentPage < totalPages - 1}
      <div
        class="navbutton"
        style="background-image: url({resolveIconImageByName('icon_nav_right.png')});"
        on:click={nextPage}
      />
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
    height: 50vw;
    width: 46.78vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0vw 1vw;
  }

  .options-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 3.18vw;
    width: 100%;
  }

  .navbutton {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 5vw;
    height: 5vw;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

</style>
