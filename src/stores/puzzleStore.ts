import { derived, get, writable } from "svelte/store";
import type { Puzzle } from "../types/puzzle";

export const currentPuzzle = writable<Puzzle | undefined>(undefined);

const STORAGE_KEY = "SOLVED_PUZZLE_SET";

function loadSolvedPuzzlesSet(): Set<string> {
  const storedValue = localStorage.getItem(STORAGE_KEY);
  return storedValue
    ? new Set<string>(JSON.parse(storedValue) as string[])
    : new Set<string>();
}

export const solvedPuzzles = writable<Set<string>>(loadSolvedPuzzlesSet());

solvedPuzzles.subscribe((value) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...value]));
});

export function markPuzzleSolved(puzzle: Puzzle) {
  solvedPuzzles.update((set) => {
    set.add(puzzle.id);
    return set;
  });
}

export const isPuzzleSolved = derived(solvedPuzzles, ($solvedPuzzles) => {
  return (puzzle: Puzzle | undefined) => {
    if (!puzzle) return true;
    return $solvedPuzzles.has(puzzle.id);
  };
});
