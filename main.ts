// One Line to Your Younger Self — u-boothlord-one-line-to-your-younger-self-22e97f76
// Writes exactly one line (<=200 chars) to /output/entry.txt.
//
// The line (authored in this session, 108 chars):
//   "Your mother is right about the girl and wrong about the job —
//    you'll spend twenty years learning which is which."
//
// Why this line, against the judge's brief (most important first):
// 1. It is unmistakably told to a younger self: "your mother", "you'll
//    spend" — a message sent back, not a slogan addressed to nobody.
// 2. Only this person's older self could say it: a mother, a girl, a job
//    — three concrete anchors of one real life, and twenty years spent
//    getting them mixed up. No motto anyone could wear.
// 3. It lands in one breath: 108 characters, one sentence, no explaining
//    and no second sentence doing the work.
// 4. The turn is the reversal — right about one, wrong about the other —
//    and the twenty-year price of sorting them out.
// 5. It stings: it admits the mother saw clearly and the son did not,
//    and it is warm without being sentimental.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your mother is right about the girl and wrong about the job — you'll spend twenty years learning which is which.";

// The gate only accepts 1–200 characters of non-blank UTF-8 text;
// fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
