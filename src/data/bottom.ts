import type { Option } from "../types/option";
import { Slot } from "../types/slot";

export const BOTTOM_OPTIONS: Option[] = [
  {
	name: "old_tinyshort",
	asset: "old_tinyshort.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "cargojean",
	asset: "cargojean.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "grayjean",
	asset: "grayjean.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "heartshorts",
	asset: "heartshorts.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "mujipants",
	asset: "mujipants.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "clue_creampuff",
	asset: "clue_creampuff.png",
	slot: Slot.BOTTOM,
	puzzle: {
	  id: "creampuffPuzzle",
	  prompt: "a secret letter you can hear / is in my playlists now, my dear",
	  password: "toris",
	  hint: "jazz cafe",
	  location: {
		locationText: "a playlist of mine titled 'my dear'",
		locationUrl: "https://open.spotify.com/playlist/5F6O0ZU9MEAhQJcwWtZZEx"
   	  }
	}
  },
  {
	name: "clue_pearledskirt",
	asset: "clue_pearledskirt.png",
	slot: Slot.BOTTOM,
	puzzle: {
	  id: "pearledPuzzle",
	  prompt: "how much i love you? oh, this much / eleventh line of twenty one",
	  password: "pearl",
	  hint: "your name",
	  location: {
		locationText: "thismuch #21, line 11",
		locationUrl: "https://www.thismuch.org/2025"
   	  }
	}
  },
  {
	name: "clue_sweatpants",
	asset: "clue_sweatpants.png",
	slot: Slot.BOTTOM,
	puzzle: {
	  id: "sweatpantsPuzzle",
	  prompt: "so many plans are in this list / they're not yet done 'cause we just kiss...",
	  password: "chips",
	  hint: "fragments",
	  location: {
		locationText: "acebee bucket list",
		locationUrl: "https://docs.google.com/spreadsheets/d/11iwjCwxGhD7B4OxSROz5L04wmNa2eX9Y-CcZwErS8Gk/edit?gid=0#gid=0"
   	  }
	}
  },
  {
	name: "old_brown",
	asset: "old_brown.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "old_cloudskirt",
	asset: "old_cloudskirt.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "old_denimskirt",
	asset: "old_denimskirt.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "old_htv",
	asset: "old_htv.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "old_lightjean",
	asset: "old_lightjean.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "old_tennis",
	asset: "old_tennis.png",
	slot: Slot.BOTTOM,
  },
  {
	name: "old_twotone",
	asset: "old_twotone.png",
	slot: Slot.BOTTOM,
  },
];
