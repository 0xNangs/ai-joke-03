import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), 'My coding agent writes 2,000 lines while my coffee brews. I spend the whole day reviewing them. I wasn\'t replaced by AI — I was demoted to its intern.');
