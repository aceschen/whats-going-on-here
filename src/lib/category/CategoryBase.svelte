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
    width: 8%;
    aspect-ratio: 1;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    border-radius: 5%;
  }

  .category-base::after {
    content: "";
    position: absolute;
    top: -0.35%;
    left: -0.35%;
    right: -0.35%;
    bottom: -0.35%;
    border: min(0.5vw, 1vh) solid transparent;
    border-radius: 10%;
    pointer-events: none;
  }

  .category-base.selected::after {
    border-color: var(--red-accent);
  }
</style>
