import fs from 'node:fs/promises';
import type { PathLike } from 'node:fs';

export const readFile = (path: PathLike) => fs.readFile(path, { encoding: 'utf-8' });
