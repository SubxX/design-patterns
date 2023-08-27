/*
    Name - Observer Pattern | Pub/Sub Pattern
    Type - Behavioral Patterns
    Its a design pattern where an object known as a subject maintains a list of its dependents, called observers, and
    notifies them of state changes, typically by calling one of their methods.
*/

interface Observer<T> {
    update(value: T): void
}

class Publisher<T>{
    observers: Observer<T>[] = [];

    constructor() { }

    subscribe(observer: Observer<T>) {
        this.observers.push(observer)
    }

    notifyObserver(value: any) {
        this.observers.forEach(observer => observer.update(value))
    }

    unsubscribe(observer: Observer<T>) {
        const index = this.observers.indexOf(observer)
        if (index > 0) {
            this.observers.splice(index, 1)
        }
    }
}

class SubscriberOne implements Observer<string>{
    update(value: string): void {
        console.log(`Subscriber 1 received value ~ ${value}`)
    }
}

class SubscriberTwo implements Observer<string>{
    update(value: string): void {
        console.log(`Subscriber 2 received value ~ ${value}`)
    }
}

const publisher = new Publisher<string>()

const subscriberOne = new SubscriberOne();
const subscriberTwo = new SubscriberTwo();

publisher.subscribe(subscriberOne)
publisher.subscribe(subscriberTwo)

publisher.notifyObserver('Hello there')
publisher.notifyObserver('Hey Man')