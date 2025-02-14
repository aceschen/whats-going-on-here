import { writable } from "svelte/store";

export function loadSet(storageKey: string): Set<string> {
  const storedValue = localStorage.getItem(storageKey);
  return storedValue ? new Set<string>(JSON.parse(storedValue)) : new Set<string>();
}

export function createPersistentSetStore(storageKey: string, initialValue: Set<string>) {
  const store = writable<Set<string>>(initialValue);
  store.subscribe((value) => {
    localStorage.setItem(storageKey, JSON.stringify(Array.from(value)));
  });
  return store;
}
