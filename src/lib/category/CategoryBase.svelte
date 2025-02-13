<script lang="ts">
  export let imageUrl: string;
  export let isSelected: boolean;
  export let onClick: () => void = () => {};
</script>

<div
  class="category-base {isSelected ? 'selected' : ''}"
  style="background-image: url({imageUrl});"
  on:click={onClick}
/>

<style>
  .category-base {
    width: 6.9vw;
    aspect-ratio: 1;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border-radius: 0.5vw;
  }

  .category-base::after {
    content: "";
    position: absolute;
    top: -0.35vw;
    left: -0.35vw;
    right: -0.35vw;
    bottom: -0.35vw;
    border: 0.5vw solid transparent;
    border-radius: 0.5vw;
    pointer-events: none;
  }

  .category-base.selected::after {
    border-color: var(--red-accent);
  }
</style>
