import assert from 'node:assert';

import {add} from '../src/index';

describe('add(a: number, b: number): number', () => {
	it('Should add two numbers together' , () => {
		assert(add(10, 10) === 20);
	});
});