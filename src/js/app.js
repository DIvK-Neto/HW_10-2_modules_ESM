import { Character } from './domain.js';
import Game, { GameSavingData as SaveData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

const character = new Character('Славный герой');

const game = new Game(character);
game.start();