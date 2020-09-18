import { Person } from "./Person";
export class Student extends Person {
    constructor(name, className) {
        super(name);
        this.className = className;
        // this.study = this.study.bind(this);
    }

    study = () => {
        super.move();
        console.log(`${this.name} is studying in ${this.className}`);
    }
}
