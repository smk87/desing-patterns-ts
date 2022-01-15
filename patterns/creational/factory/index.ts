/*
Factory - A combination of the single responsibility and open/closed principles.
*/

import { GameCharactersFactory } from './game-characters-factory';

let warrior = GameCharactersFactory.getWarrior(12);
let mage = GameCharactersFactory.getMage(12);

console.log(`Warrior at level 12: `, warrior);
console.log(`Mage at level 12: `, mage);
