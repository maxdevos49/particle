import assert from 'node:assert';

import { Particle3D } from '../src/index';

describe('Particle3D.create', () => {
	it('Should create a new particle', () => {
		assert.deepEqual(Particle3D.create(), { position: { x: 0, y: 0, z: 0 }, velocity: { x: 0, y: 0, z: 0 }, attributes: undefined });
	});
});
