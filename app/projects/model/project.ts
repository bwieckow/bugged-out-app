import { Bug } from "../../bugs/model/bug";

export class Project {
    constructor(
        public id: string,
        public name: string,
        public bugs: Bug[]
    ) {

    }
}