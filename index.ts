// alias

type Status = 'idle' | 'loading' | 'response'; // union

let myStatus: Status = "idle";

let y: (number | string) = 1;

const b: number[] = [1,2,3];

const c = [1,2,3,'dfdf'];

interface PersonInterface {
    id: number
    name: string
    register(): string
  }
  
  // Classes
  class Person implements PersonInterface {
    id: number
    name: string
  
