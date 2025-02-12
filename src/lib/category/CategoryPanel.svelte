<script lang="ts">
  import { CATEGORIES } from "../../data/category";
  import Category from "./Category.svelte";
  import CategoryBase from "./CategoryBase.svelte";
</script>

<div class="category-panel">
  <CategoryBase imageUrl={"/src/assets/icon/icon_home.png"} />
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
