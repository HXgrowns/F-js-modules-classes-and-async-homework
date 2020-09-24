import { Person } from "./Person";
// TODO feedback: 文件里只需导出一个模块，推荐用export default
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
