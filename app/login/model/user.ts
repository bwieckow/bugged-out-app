import { Project } from "../../projects/model/project";

export class User {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public password: string,
        public email: string,
    ) {

    }
}