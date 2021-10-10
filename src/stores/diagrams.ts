import { makeAutoObservable } from 'mobx';
import _ from 'lodash';

import DiagramValue from '../models/DiagramValue';

class Diagrams {
  chartData: DiagramValue[] = [];
  constructor() {
    makeAutoObservable(this);

    this.setRandomData();
  }

 
  
}

export default new Diagrams();
