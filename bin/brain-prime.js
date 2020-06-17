#!/usr/bin/env node
import { game } from '../src/index.js';
import { gameTask, generateQuestionAndAnswer } from '../src/games/brain-prime.js';

game(gameTask, generateQuestionAndAnswer);