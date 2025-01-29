<script lang="ts">
    import { shoeOption } from "../stores/selectedOptions";
    import type { Option } from "../types/option";
    import { setOptionState } from "../util/stateUtil";

    export let option: Option;

    // Dynamically import assets
    const images = import.meta.glob("/src/assets/*", { eager: true });
    const imageUrl = images[`/src/assets/${option.asset}`]?.default || "";

    function selectOption() {
        setOptionState(option);
        console.log("Set option ", $shoeOption)
    }
</script>

<button 
    class="option-button" 
    style="background-image: url({imageUrl});"
    on:click={selectOption}
>
lol
</button>

<style>
    .option-button {
        height: 80px;
        width: 80px;
        background-color: aliceblue;
        background-size: cover; /* Ensures the image covers the button */
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 8px; /* Optional: Rounds the corners */
    }
</style>
