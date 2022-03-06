export abstract class Money {
    protected amount: number = 0;
    abstract times(multiplier: number): Money;
    
    equals (money: Money):boolean {
        return this.amount === money.amount
        && this.constructor.name === money.constructor.name;
    }
    
    static doller(amount:number):Money {
        return new Doller(amount);
    }
}
export class Doller extends Money{
    constructor(amount: number) {
        super();
        this.amount = amount;
    }
    
    times (multiplier: number): Money
    {
        return new Doller(this.amount * multiplier);
    }
}
    
export class Franc extends Money{
    constructor(amount: number) {
        super();
        this.amount = amount;
    }
    
    times (multiplier: number): Money
    {
        return new Franc(this.amount * multiplier);
    }
}