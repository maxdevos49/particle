import { Vector, Vector3 } from '@m4xdev/vector';

type ParticleAttributes = Record<string, string | number | boolean>;

interface Particle<TAttributes extends ParticleAttributes> {
	position: Vector;
	velocity: Vector;
	attributes: TAttributes | undefined;
}

function create<TAttributes extends ParticleAttributes>(position?: Vector, velocity?: Vector, attributes?: TAttributes): Particle<TAttributes> {
	return {
		position: position ?? Vector3.create(),
		velocity: velocity ?? Vector3.create(),
		attributes: attributes
	};
}

function applyForce<TAttributes extends ParticleAttributes>(particle: Particle<TAttributes>, force: Vector): Particle<TAttributes> {
	const newVelocity = Vector3.add(particle.velocity, force);
	const newPosition = Vector3.add(particle.position, newVelocity);

	return {
		velocity: newVelocity,
		position: newPosition,
		attributes: particle.attributes ? structuredClone(particle.attributes) : undefined
	};
}

function applyScalar<TAttributes extends ParticleAttributes>(particle: Particle<TAttributes>, scalar: number): Particle<TAttributes> {
	const newVelocity = Vector3.mult(particle.velocity, scalar);
	const newPosition = Vector3.add(particle.position, newVelocity);

	return {
		velocity: newVelocity,
		position: newPosition,
		attributes: particle.attributes ? structuredClone(particle.attributes) : undefined
	};
}

const Particle3D = {
	create,
	applyForce,
	applyScalar
};

export { Particle, ParticleAttributes, Particle3D };
