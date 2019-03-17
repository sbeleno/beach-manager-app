import { Beach } from './beach';

export class Employee {

    constructor(_id = '', name = '', email = '', phone = '', beach = new Beach, gender = '') {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.beach = beach;
        this.gender = gender;
     }
     
    _id: string;
    name: string;
    email: string;
    phone: string;
    beach: Beach;
    gender: string;
}
