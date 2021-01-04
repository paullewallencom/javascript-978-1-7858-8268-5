require("babel-polyfill");

import * as encounter from './encounter.js'

export class Environment {
  constructor(name) {
    this.name = name;
    this.encounter = encounter.generate();
  }

  stumbleUpon() {
    this.encounter = encounter.generate();
    this.pokeEncounter = this.encounter.poke();

    var interaction = name + "You just stumbled upon ... " + this.encounter.whenEncounter();
    return interaction;
  }

  poke() {
    var pokeReturn = this.pokeEncounter.next();
    if (!pokeReturn.done) {
      return pokeReturn.value;
    }
    return "";
  }
}
