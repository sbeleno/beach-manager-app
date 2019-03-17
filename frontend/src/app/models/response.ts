export class Response {

    constructor(message = '', token = '') {
        this.message = message;
        this.token = token;
     }
     
    message: string;
    token: string;
}
