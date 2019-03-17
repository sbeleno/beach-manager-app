export class Beach {

    constructor(_id = '', name = '', percentage = 0) {
        this._id = _id;
        this.name = name;
        this.percentage = percentage;
     }
     
    _id: string;
    name: string;
    percentage: number;
}
