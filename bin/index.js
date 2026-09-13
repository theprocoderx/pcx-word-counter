#!/usr/bin/env node
import { countWords } from '../lib/counter.js';

const filePath = process.argv[2];
const targetWord = process.argv[3];

countWords(filePath, targetWord);
