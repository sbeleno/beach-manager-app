export class User {

    constructor(email = '', password = '', token = '') {
        this.email = email;
        this.password = password;
        this.token = token;
     }
     
    email: string;
    password: string;
    token: string;
}
