export default class Company{
    constructor(name, founded, industry){
        this.name = name
        this.founded = founded
        this.industry = industry
    }

    show(){
        return {name : this.name, founded : this.founded};
    }
}