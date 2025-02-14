import { derived, writable } from "svelte/store";
import type { Puzzle } from "../types/puzzle";
import type { Option } from "../types/option";
import { ACCESSORY_OPTIONS } from "../data/accessory";
import { TOP_OPTIONS } from "../data/top";
import { SOCK_OPTIONS } from "../data/sock";
import { SHOE_OPTIONS } from "../data/shoe";
import { OUTERWEAR_OPTIONS } from "../data/outerwear";
import { HAIR_OPTIONS } from "../data/hair";
import { FACE_OPTIONS } from "../data/face";
import { DRESS_OPTIONS } from "../data/dress";
import { BOTTOM_OPTIONS } from "../data/bottom";
import { BACKGROUND_OPTIONS } from "../data/background";
import { createPersistentSetStore, loadSet } from "../util/storageUtil";

export const currentPuzzle = writable<Puzzle | undefined>(undefined);
// Hack, since Puzzle has no knowledge of its parent
export const currentAssociatedOption = writable<Option | undefined>(undefined);

const SOLVED_PUZZLES_STORAGE_KEY = "SOLVED_PUZZLE_SET";
const ACTIVATED_HINTS_STORAGE_KEY = "ACTIVATED_HINT_SET";
const ACTIVATED_LOCATIONS_STORAGE_KEY = "ACTIVATED_LOCATION_SET";

const ALL_PUZZLES = (() => {
  // Probably should have just used actual objects for everything and created an initializer. Too late now
  const puzzles = new Set<string>();

  const optionGroups = [
    ACCESSORY_OPTIONS,
    TOP_OPTIONS,
    SOCK_OPTIONS,
    SHOE_OPTIONS,
    OUTERWEAR_OPTIONS,
    HAIR_OPTIONS,
    FACE_OPTIONS,
    DRESS_OPTIONS,
    BOTTOM_OPTIONS,
    BACKGROUND_OPTIONS,
  ];

  optionGroups.forEach((options) => {
    options.forEach((option) => {
      if (option.puzzle) {
        puzzles.add(option.puzzle.id);
      }
    });
  });

  return puzzles;
})();

export const UNIQUE_PUZZLE_COUNT = ALL_PUZZLES.size;

export const solvedPuzzles = createPersistentSetStore(
  SOLVED_PUZZLES_STORAGE_KEY,
  loadSet(SOLVED_PUZZLES_STORAGE_KEY),
);

export const activatedHints = createPersistentSetStore(
  ACTIVATED_HINTS_STORAGE_KEY,
  loadSet(ACTIVATED_HINTS_STORAGE_KEY),
);

export const activatedLocations = createPersistentSetStore(
  ACTIVATED_LOCATIONS_STORAGE_KEY,
  loadSet(ACTIVATED_LOCATIONS_STORAGE_KEY),
);

export function markPuzzleSolved(puzzle: Puzzle) {
  solvedPuzzles.update((set) => {
    set.add(puzzle.id);
    return set;
  });
}

export function markHintActivated(puzzle: Puzzle) {
  activatedHints.update((set) => {
    set.add(puzzle.id);
    return set;
  });
}

export function markLocationActivated(puzzle: Puzzle) {
  activatedLocations.update((set) => {
    set.add(puzzle.id);
    return set;
  });
}

export const isPuzzleSolved = derived(solvedPuzzles, ($solvedPuzzles) => {
  return (puzzle: Puzzle | undefined): boolean => {
    if (!puzzle) return true;
    return $solvedPuzzles.has(puzzle.id);
  };
});

export const isHintActivated = derived(activatedHints, ($activatedHints) => {
  return (puzzle: Puzzle | undefined): boolean => {
    if (!puzzle) return false;
    return $activatedHints.has(puzzle.id);
  };
});

export const isLocationActivated = derived(
  activatedLocations,
  ($activatedLocations) => {
    return (puzzle: Puzzle | undefined): boolean => {
      if (!puzzle) return false;
      return $activatedLocations.has(puzzle.id);
    };
  },
);

export const areAllPuzzlesSolved = derived(solvedPuzzles, ($solvedPuzzles) => {
  // Assuming all puzzles are correctly set, it is a LOT faster to just check the size
  // In case we have some crazy bug.... allow having extra puzzles count as winning
  console.log("Solved Puzzles Count: ", $solvedPuzzles.size);
  console.log("Total Puzzles Count: ", UNIQUE_PUZZLE_COUNT);
  return $solvedPuzzles.size >= ALL_PUZZLES.size;
});
