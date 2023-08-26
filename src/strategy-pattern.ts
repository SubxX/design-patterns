/*
 STRATEGY Pattern
 Its a behavioral design pattern that defines a family of algorithms, encapsulates each one of them and make them
 interchangeable, It allows you to select an algorithm at run time base on some condition
*/

interface PaymentStrategy {
    pay(amount: number): void
}

class CreditCardPayment implements PaymentStrategy {
    constructor(private cardNumber: string, private name: string) { }

    pay(amount: number): void {
        console.log(`Paid amount $${amount} by ${this.name} using card ${this.cardNumber}`)
    }
}

class PaypalPayment implements PaymentStrategy {
    constructor(private email: string) { }

    pay(amount: number): void {
        console.log(`Paid amount $${amount} by paypal using account ~ ${this.email}`)
    }
}

class ShoppingCard {
    items: Map<string, number> = new Map();
    private paymentStrategy!: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.paymentStrategy = strategy
    }

    addItem(item: string, price: number) {
        if (this.items.has(item)) {
            this.items.set(item, this.items.get(item)! + price)
        } else {
            this.items.set(item, price)
        }
    }

    checkout() {
        const totalAmount = Array.from(this.items.values())
            .reduce((acc, item) => acc + item, 0);
        this.paymentStrategy.pay(totalAmount)
    }
}

const creditCardPaymentStrategy = new CreditCardPayment('122122223412', 'Subham Bhattacharya');
const cartOne = new ShoppingCard(creditCardPaymentStrategy);
cartOne.addItem('Product 1', 20);
cartOne.addItem('Product 2', 9.4);
cartOne.addItem('Product 3', 12);
cartOne.checkout()


const paypalPaymentStrategy = new PaypalPayment('subham@gmail.com');
const cartTwo = new ShoppingCard(paypalPaymentStrategy);
cartTwo.addItem('Product 1', 16);
cartTwo.addItem('Product 2', 11.2);
cartTwo.addItem('Product 3', 7.69);
cartTwo.checkout()

// [Note] Alternatively we can also pass the PaymentStrategy on checkout function as argument as well that we we can
// interchange without creating a new cart object every time