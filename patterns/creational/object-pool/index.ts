/*
Object pool - A pool of pre initialized objects whose initialization is heavyweight. Every time we need such object we take one from thee pool and once we are done with it, we return in back to the pool. In modern development mainly useful for game development. Used in combination with factory pattern.
*/

import { GameCharactersPool } from './game-characters-pool';

let level = 12;

let pool = new GameCharactersPool(level);

// Load 40 warriors
for (let i = 0; i < 40; i++) {
	console.log(i + 1);
	console.log(pool.getWarrior());
}
