<script lang="ts">
    import { CATEGORIES } from "../data/categories";
    import type { Category } from "../types/category";
    import ClearOption from "./ClearOption.svelte";
    import Option from "./Option.svelte";

    let selectedCategory: Category | null = null;
</script>

<div class="options-panel">
    {#if selectedCategory === null}
        <!-- Show the list of categories -->
        <h2>Categories</h2>
        <ul class="category-list">
            {#each CATEGORIES as category}
                <li>
                    <button on:click={() => selectedCategory = category}>
                        {category.name}
                    </button>
                </li>
            {/each}
        </ul>
    {:else}
        <!-- Show items in the selected category -->
        <h2>{selectedCategory.name}</h2>
        <div class="options-container">
            <ClearOption slot={selectedCategory.slot}/>
            {#each selectedCategory.options as option}
                <Option option={option}/>
            {/each}
        </div>
        <button class="back-btn" on:click={() => selectedCategory = null}>Back</button>
    {/if}
</div>

<style>
    .options-panel {
        height: 90vh;
        width: 40vw;
        background-color: rebeccapurple;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .category-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        list-style: none;
        padding: 0;
    }

    .options-container {
        display: flex;
        flex-wrap: wrap; /* Allows items to wrap if there's not enough space */
        gap: 1rem;
        justify-content: flex-start; /* Align items to the left */
    }

    .options-container > * {
        flex: 1 1 auto; /* Allows flexible growth while keeping items evenly distributed */
        min-width: 80px; /* Prevents items from getting too small */
    }

    .back-btn {
        margin-top: 10px;
        background: #ff6b6b;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 4px;
    }

    .back-btn:hover {
        background: #d9534f;
    }
</style>
