import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instanceMage = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instanceMage += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instanceMage;
  }
}

export default Mage;
