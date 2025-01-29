<script lang="ts">
    import { shoeOption } from "../stores/selectedOptions";

    // Dynamically import assets
    const images = import.meta.glob("/src/assets/*", { eager: true });

    let imageUrl = "";

    // Reactive statement to update imageUrl when $shoeOption changes
    $: imageUrl = $shoeOption ? images[`/src/assets/${$shoeOption.asset}`]?.default || "" : "";
</script>

<div 
    class="canvas" 
    style="background-image: url({imageUrl});"
>
</div>

<style>
    .canvas {
        height: 600px;
        width: 600px;
        background-color: royalblue;
        background-size: contain; /* Adjust to fit */
        background-position: center;
        background-repeat: no-repeat;
    }
</style>
