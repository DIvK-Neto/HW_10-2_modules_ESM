export default class Game {
    constructor(character) {
        this.character = character;
    }

    start() {
        console.log(`Игра началась! Ваш персонаж: ${this.character.name}`);
    }
}

export class GameSavingData { }

export function readGameSaving() { }

export function writeGameSaving() { }