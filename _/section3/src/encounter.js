export class Encounter {
  constructor(introText="") {
      this.introText = introText;
  }
  whenEncounter() {
    return this.introText;
  }
}

export class Bear extends Encounter {
  constructor() {
    super("grr grow, you encountered a bear!");
  }
}
export class Angel extends Encounter {
  constructor() {
    super("wow, you encountered an angel, this will give you strength and healing possibilities!");
  }
}
export class Ghost extends Encounter {
  constructor() {
    super();
    this.introText = "Boooh, you encountered a Ghost!";
  }
}

export function generate() {
  var number = Math.floor(Math.random() * (4 - 1)) + 1;

  if (number == 1) {
    return new Bear();
  } else if (number == 2) {
    return new Angel();
  } else if (number == 3) {
    return new Ghost();
  } else if (number == 4) {
    return new Encounter();
  }
}
