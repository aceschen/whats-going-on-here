<script lang="ts">
  import { areAllPuzzlesSolved } from "../stores/puzzleStore";
  import {
    exportCombinedImage,
    resolveBaseImage,
    resolveImage,
  } from "../util/imgUtil";
  import {
    backgroundOption,
    hairOption,
    faceOption,
    topOption,
    sockOption,
    shoeOption,
    outerwearOption,
    dressOption,
    bottomOption,
    accessoryOptions,
  } from "../stores/optionsStore";

  function onDownloadClick() {
    const imagePaths = [
      resolveImage($backgroundOption),
      resolveImage($hairOption),
      resolveImage($faceOption),
      resolveBaseImage(),
      resolveImage($sockOption),
      resolveImage($shoeOption),
      resolveImage($bottomOption),
      resolveImage($topOption),
      resolveImage($dressOption),
      resolveImage($outerwearOption),
      ...Array.from($accessoryOptions).map((accessory) =>
        resolveImage(accessory),
      ),
    ];
    exportCombinedImage(imagePaths);
  }
</script>

<div class="homepage">
  {#if $areAllPuzzlesSolved}
   <div>
      <div class="title">build-a-bel</div>
    </div>
    <div class="homepage-text">
      <p><span style="color:var(--red-accent)">congratalions!</span> you solved all nineteen puzzles and unlocked all the items! 
      enjoy isabuilding :3C all my love, <span style="color:var(--red-accent)">ace</span></p>
      <p>~*~ <span style="color:var(--red-accent)">credits</span> ~*~</p>
      <p>programming: kevin </p>
      <p>clue testing: serena & jack</p>
      <p>clue hiding: henry, shm, jingyi, kiki, serena, & david</p>
      <p>~*~*~*~*~*~*~</p>
      <p>your final password: <span style="color:var(--red-accent)">loveisintheair!</span></p>
    </div>
    <div class="download-button" on:click={onDownloadClick}>download isabel</div>
  {:else}
    <div>
      <div class="title">build-a-bel</div>
    </div>
    <div class="homepage-text">
      <p><span style="color:var(--red-accent)">happy anniversary, isabel!</span></p>
      <p>this isabuilder has a bunch of new clothes and backgrounds to choose from. it also has 
      <span style="color:var(--red-accent)">nineteen secret items</span> — 
      unlock them by solving <span style="color:var(--red-accent)">cryptic crossword clues</span> scattered across the web! </p>
      <p>secret items are marked with <span style="color:var(--red-accent)">hearts</span>. solve their riddle to locate the clue, then solve the clue to unlock the item.</p>
      <p>each item has hints if you need them, or you can ask me :~) 
      once you unlock all nineteen secret items, come back here to get the <span style="color:var(--red-accent)">final password</span>.
      happy puzzling!</p>
      <p>all my love,</p>
      <p><span style="color:var(--red-accent)">ace</span></p>
    </div>
  {/if}
</div>

<style>
  .homepage {
    background-color: white;
    width: 50%;
    height: 96%;
    border-radius: 2%;
    color: #3d3d3d;
  }

  .homepage-text {
    text-align: left;
    padding: 0% 5%;
    width: 90%;
    font-size: min(1.5vw, 2.5vh);
    color: #3d3d3d;
  }

  p {
    margin: 3% 0;
  }

  .download-button {
    background-color: var(--red-accent);
    font-size: min(1.5vw, 2.5vh);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    margin-left: 5%;
    width: 12vw;
    margin-top: 4%;
  }

  .download-button:hover {
    cursor: pointer;
  }

  .download-button:active {
    background-color: #c45151;
  }
  

  .title {
    color: var(--red-accent); 
    font-size: min(3vw, 5vh);
    margin-top: 2.8%;
  }

  

</style>
