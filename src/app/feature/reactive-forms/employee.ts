export class Employee {

    constructor(public empId: number,
        public eName: string,
        public age: number,
        public mobileNumber: number,
        public addressGroup: Address
        ){ }
}

export class Address {

    constructor(
        public address: string,
        public pincode: string
        ){ }
}
