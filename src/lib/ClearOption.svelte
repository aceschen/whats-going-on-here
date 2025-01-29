<script lang="ts">
    import { shoeOption } from "../stores/selectedOptions";
    import { Slot } from "../types/slot";
    import { clearOptionState } from "../util/stateUtil";

    export let slot: Slot;

    function clearOption() {
        clearOptionState(slot);
        shoeOption.set(undefined); // Reset selected shoe option
    }
</script>

<button class="clear-option-button" on:click={clearOption}>
    X
</button>

<style>
    .clear-option-button {
        height: 40px;
        width: 40px;
        background-color: red;
        color: white;
        font-size: 1.2rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.1s ease-in-out;
    }

    .clear-option-button:hover {
        background-color: darkred;
        transform: scale(1.1);
    }
</style>
