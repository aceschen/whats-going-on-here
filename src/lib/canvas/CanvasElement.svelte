<script lang="ts">
  import { resolveImage } from "../../util/imgUtil";
  import CanvasElementBase from "./CanvasElementBase.svelte";
  import type { Option } from "../../types/option";

  export let option: Option | undefined;
  export let zIndex: number;

  $: imageUrl = resolveImage(option);
</script>

<CanvasElementBase {imageUrl} {zIndex} />
