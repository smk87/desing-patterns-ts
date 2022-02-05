import { IDepC } from './idepc';
import { IDepA } from './idepa';
import { IDepB } from './idepb';
import { injectable, inject } from 'inversify';
import { TYPES } from './types';

@injectable()
export class ConcreteC implements IDepC {
	constructor(
		@inject(TYPES.IDepA)
		private _depA: IDepA,
		@inject(TYPES.IDepB)
		private _depB: IDepB
	) {}

	doC(): void {
		this._depA.doA();
		this._depB.doB();
		console.log('Doing C');
	}
}
