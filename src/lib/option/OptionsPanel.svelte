<script lang="ts">
  import { selectedCategory } from "../../stores/optionsStore";
  import Option from "./Option.svelte";
  import { resolveIconImageByName } from "../../util/imgUtil";

  let currentPage = 0;
  const itemsPerPage = 12;

  $: allItems = $selectedCategory ? $selectedCategory.options : [];

  $: totalItems = allItems.length;
  $: totalPages = Math.ceil(totalItems / itemsPerPage);
  $: displayedItems = allItems.slice(
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
      <div class="placeholder" />
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
      <div class="placeholder" />
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
    width: 50%;
    height: 96%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff88;
    border-radius: 2%;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0% 1%;
    width: 89%;
    margin-top: 2.8%;
  }

  .options-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 90%;
    column-gap: 3%;
    row-gap: 4%;
    aspect-ratio: 4 / 3;
    margin-bottom: 4.5%;
  }

  .navbutton {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 5%;
    aspect-ratio: 1;
    margin-top: 2.4%;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .placeholder {
    width: 5%;
    aspect-ratio: 1;
  }
  .category-name {
    font-size: min(3vw, 5vh);
    color: var(--red-accent);
  }
</style>
