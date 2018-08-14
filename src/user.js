export default class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    sayHi() {
        return `Hello, ${this.name} ${this.surname}`;
    }
}
