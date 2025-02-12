import { derived, writable } from "svelte/store";
import type { Puzzle } from "../types/puzzle";

export const currentPuzzle = writable<Puzzle | undefined>(undefined);

const SOLVED_PUZZLES_STORAGE_KEY = "SOLVED_PUZZLE_SET";
const ACTIVATED_HINTS_STORAGE_KEY = "ACTIVATED_HINT_SET";

function loadSet(storageKey: string): Set<string> {
  const storedValue = localStorage.getItem(storageKey);
  return storedValue ? new Set<string>(JSON.parse(storedValue)) : new Set<string>();
}

function createPersistentSetStore(storageKey: string, initialValue: Set<string>) {
  const store = writable<Set<string>>(initialValue);
  store.subscribe((value) => {
    localStorage.setItem(storageKey, JSON.stringify(Array.from(value)));
  });
  return store;
}

export const solvedPuzzles = createPersistentSetStore(
  SOLVED_PUZZLES_STORAGE_KEY,
  loadSet(SOLVED_PUZZLES_STORAGE_KEY)
);

export const activatedHints = createPersistentSetStore(
  ACTIVATED_HINTS_STORAGE_KEY,
  loadSet(ACTIVATED_HINTS_STORAGE_KEY)
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
