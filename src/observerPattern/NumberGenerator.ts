import { Observer } from './Observer';
export default abstract class NumberGenerator {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this))
    }

    abstract getNumber(): number;

    abstract execute(): void;
}
