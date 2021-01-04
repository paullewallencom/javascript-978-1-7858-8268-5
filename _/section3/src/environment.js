import * as encounter from './encounter.js'

export class Environment {
  constructor(name) {
    this.name = name;
    this.encounter = encounter.generate();
  }

  stumbleUpon() {
    this.encounter = encounter.generate();

    var interaction = name + "You just stumbled upon ... " + this.encounter.whenEncounter();
    return interaction;
  }
}
