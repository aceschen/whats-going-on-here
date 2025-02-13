<script lang="ts">
  import { CATEGORIES } from "../../data/category";
  import { selectedCategory } from "../../stores/optionsStore";
  import { resolveIconImageByName } from "../../util/imgUtil";
  import Category from "./Category.svelte";
  import CategoryBase from "./CategoryBase.svelte";

  function selectHome() {
    selectedCategory.set(undefined);
  }
</script>

<div class="category-panel">
  <CategoryBase 
    imageUrl={resolveIconImageByName('icon_home.png')} 
    isSelected={!$selectedCategory}
    onClick={selectHome} 
    />
  {#each CATEGORIES as category (category.slot)}
    <Category {category} />
  {/each}
</div>

<style>
  .category-panel {
    display: flex;
    gap: 1.9vw;
    justify-content: flex-start;
    padding-top: 4vw;
  }
</style>
