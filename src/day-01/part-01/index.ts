import path from 'node:path';
import { solve } from './solve';
import { readFile } from '../../utils';

const inputPath = path.resolve(__dirname, '../input.txt');
readFile(inputPath).then(solve).then(console.log).catch(console.error);
