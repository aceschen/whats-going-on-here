<script lang="ts">
  import { selectedCategory } from "../../stores/optionsStore";
  import { resolveIconImage } from "../../util/imgUtil";
  import type { Category } from "../../types/category";
  import CategoryBase from "./CategoryBase.svelte";

  export let category: Category;
  $: imageUrl = resolveIconImage(category.slot);
  $: isSelected = $selectedCategory?.slot == category.slot;

  function selectCategory() {
    selectedCategory.set(category);
  }
</script>

<CategoryBase {imageUrl} {isSelected} onClick={selectCategory} />
