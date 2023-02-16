import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _instanceRanger = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instanceRanger += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instanceRanger;
  }
}

export default Ranger;
