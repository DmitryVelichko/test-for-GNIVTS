// alias

type Status = "idle" | "loading" | "response"; // union

let myStatus: Status = "idle";

let y: number | string = 1;

const b: number[] = [1, 2, 3];

const c = [1, 2, 3, "dfdf"];

interface PersonInterface {
  id: number;
  name: string;
  register: string;
 
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }


register() {
    return `${this.name} is now registered`
  }

}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Employee extends Person {
    position: string
  
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
      }
  }

  const emp = new Employee(3, 'Shawn', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(1) // Throws error