import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instanceWarrior = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._instanceWarrior += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instanceWarrior;
  }
}

export default Warrior;
