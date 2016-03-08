module app.domin {
    interface IPerson {
        firstName: string;
        surName: string;
        email: string;
        getName(): string;
    }

    class Person implements IPerson {
        constructor(public firstName: string, public surName: string, public email: string) {
        }

        getName() {
            return this.firstName + " " + this.surName;
        }
    }

    export class Member extends Person {
        constructor(
            public firstName: string,
            public surName: string,
            public email: string,
            public memberType: number,
            public memberNumber: number) {
            super(firstName, surName, email);
        }
    }

    export class Customer extends Person {
        constructor(
            public firstName: string,
            public surName: string,
            public email: string,
            public customerType: number) {
            super(firstName, surName, email);
        }
    }
}