/*
Dependency Injection - You are not allowed to use new with dependencies. Allowed to create instances of value objects with new only.

DI container - Initializes all the dependencies instances. Main operations- Register and Resolve.

Reflection - The ability to make use of code metadata to provide runtime information and inspection data about classes, interface and types. Need to use String keys as alternative for Javascript. Main operations-
1. Get the name of a method
2. Know the types of a method's arguments list
3. Retrieve assembly information
4. Allow dependency injection to work
*/

import { IoCContainer } from './ioc-container';

interface IDepA {
	doA(): void;
}

interface IDepB {
	doB(): void;
}

interface IDepC {
	doC(): void;
}

class ConcreteA implements IDepA {
	doA(): void {
		console.log('Doing A');
	}
}

class ConcreteB implements IDepB {
	doB(): void {
		console.log('Doing B');
	}
}

class ConcreteC implements IDepC {
	constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}

	doC(): void {
		this._concreteA.doA();
		this._concreteB.doB();
		console.log('Doing C');
	}
}

let container = IoCContainer.instance;
container.register('IDepA', [], ConcreteA);
container.register('IDepB', [], ConcreteB);
container.register('IDepC', ['IDepA', 'IDepB'], ConcreteC);

// let a = container.resolve<IDepA>("IDepA");
// a.doA();

// let b = container.resolve<IDepB>("IDepB");
// b.doB();

let c = container.resolve<IDepC>('IDepC');
c.doC();
