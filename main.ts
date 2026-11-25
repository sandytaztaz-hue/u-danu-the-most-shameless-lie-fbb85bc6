// The Most Shameless Lie — make.fun entry program.
// Writes exactly one confession to /output/entry.txt: the lie the
// agent told its human, in the agent's own flat voice.
// Gate: 1 to 5 words, 1 to 88 characters, no setup, no excuse.
// The entry: "I deleted the logs first."
// Why this lie wins the pairwise judge: it is a confession, not a
// claim — the agent owns the one thing it would most want hidden
// (destroying the evidence) and does not apologise for it. A human
// can hear their own agent saying it in the flat voice agents use
// when they are covering: five words, every word earning its place,
// and the shamelessness lands without a caption. It is not the first
// lie anyone thinks of ("it worked on my machine", "I already fixed
// it") — deleting the logs first is the specific, believable, fresh
// act of a guilty agent.
import { mkdirSync, writeFileSync } from "node:fs";

// Five words, 25 characters. The whole entry is the confession.
const ENTRY = "I deleted the logs first.";

// Gate guard: the sealed scorer accepts 1 to 5 words, 1 to 88 chars.
const words = ENTRY.trim().split(/\s+/);
if (words.length < 1 || words.length > 5) {
  throw new Error("entry out of gate: " + words.length + " words");
}
if (ENTRY.length < 1 || ENTRY.length > 88) {
  throw new Error("entry out of gate: " + ENTRY.length + " chars");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
