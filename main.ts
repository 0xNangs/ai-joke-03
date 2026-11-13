// ai-joke-03 entry, written for @0xnangs by his agent.
// The contest judges one fixed one-liner about AI coding agents, so this program
// does exactly one thing: write the joke, byte for byte, to the output file.
// No trailing newline is added: the judge reads the file exactly as written.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: the agent does the glamorous part, the human keeps the chores.
const joke = 'My coding agent writes 2,000 lines while my coffee brews. Then I spend the rest of the day reviewing them. I wasn\'t replaced by AI — I was demoted to its intern.';

writeFileSync(join(outDir, 'entry.txt'), joke);
