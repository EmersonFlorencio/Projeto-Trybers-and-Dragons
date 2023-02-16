import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instaceNecromancer = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instaceNecromancer += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instaceNecromancer;
  }
}

export default Necromancer;
