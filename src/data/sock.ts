import type { Option } from "../types/option";
import { Slot } from "../types/slot";

export const SOCK_OPTIONS: Option[] = [
  {
	name: "black",
	asset: "black.png",
	slot: Slot.SOCK,
  },
  {
	name: "merino",
	asset: "merino.png",
	slot: Slot.SOCK,
  },
  {
	name: "pattern",
	asset: "pattern.png",
	slot: Slot.SOCK,
  },
  {
	name: "white",
	asset: "white.png",
	slot: Slot.SOCK,
  },
  {
	name: "clue_hellokitty",
	asset: "clue_hellokitty.png",
	slot: Slot.SOCK,
	puzzle: {
		id: "hellokittyPuzzle",
		prompt: "a saxophonist plays her part / five stars: a book close to your heart",
		password: "michigan",
		hint: "my home",
		location: {
		  locationText: "a recent goodreads review for the rehearsal",
		  locationUrl: "https://www.goodreads.com/review/show/7313965065"
		}
	  },
  },
  {
	name: "clue_red",
	asset: "clue_red.png",
	slot: Slot.SOCK,
	puzzle: {
		id: "hellokittyPuzzle",
		prompt: "a bid alum with brush in hand / they painted where they lived: 'i am'",
		password: "tanghulu",
		hint: "sticky sweet",
		location: {
		  locationText: "jingyi's murals, hover on a quote",
		  locationUrl: "https://jingyi.me/proj/murals"
		}
	  },
  },
  {
	name: "old_dogsquiggle",
	asset: "old_dogsquiggle.png",
	slot: Slot.SOCK,
  },
  {
	name: "old_eyes",
	asset: "old_eyes.png",
	slot: Slot.SOCK,
  },
  {
	name: "old_hamburger",
	asset: "old_hamburger.png",
	slot: Slot.SOCK,
  },
  {
	name: "old_heart",
	asset: "old_heart.png",
	slot: Slot.SOCK,
  },
  {
	name: "old_pizza",
	asset: "old_pizza.png",
	slot: Slot.SOCK,
  },
  
];
