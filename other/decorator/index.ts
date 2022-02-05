/*
Decorator - A decorator is an experimental Typescript feature that allows us to annotate classes, methods and properties in order to extend their functionality without the need to subclass them.

1. Method decorator arguments - class operator, method's name, property descriptor

Below we have the examples.
*/

// Method decorator
export function disable(target: Object, methodName: string, descriptor: PropertyDescriptor) {
	descriptor.value = () => {
		throw new Error('Method is disabled');
	};
}

// Decorator factory
export function before(hook: Function) {
	return function <T extends Function>(
		target: Object,
		methodName: string,
		descriptor: PropertyDescriptor
	): PropertyDescriptor {
		return {
			get: function (this: T) {
				let originalMethod = descriptor.value!.bind(this);
				hook = hook.bind(this);

				return () => {
					hook();
					originalMethod();
				};
			},
		};
	};
}

// Constructive decorator (also a decorator factory)
export function capitalize() {
	return function <T extends { new (...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
			_a = 'A';
			_b = 'B';
		};
	};
}

@capitalize()
export class Whatever {
	private _a: string = 'a';
	private _b: string = 'b';

	foo() {
		console.log('foo');
	}

	@before(() => {
		console.log('Before hook');
	})
	bar() {
		console.log('bar');
	}

	baz() {
		console.log(this._a, this._b);
	}
}

let whatever = new Whatever();
whatever.foo();
whatever.bar();
whatever.baz();
