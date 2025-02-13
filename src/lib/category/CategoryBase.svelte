<script lang="ts">
  export let imageUrl: string;
  export let onClick: () => void = () => {};
</script>

<div
  class="category-base"
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
  }
</style>
