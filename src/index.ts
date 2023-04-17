import { Vector, Vector3 } from '@m4xdev/vector';

type ParticleAttributes = {
	/**
	 * Static particles do not move based on applied forces or scalars.
	 */
	static?: boolean;
};

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
	if (particle.attributes?.static) {
		return structuredClone(particle);
	}

	const newVelocity = Vector3.add(particle.velocity, force);

	return {
		velocity: newVelocity,
		position: structuredClone(particle.position),
		attributes: particle.attributes ? structuredClone(particle.attributes) : undefined
	};
}

function applyScalar<TAttributes extends ParticleAttributes>(particle: Particle<TAttributes>, scalar: number): Particle<TAttributes> {
	if (particle.attributes?.static) {
		return structuredClone(particle);
	}

	const newVelocity = Vector3.mult(particle.velocity, scalar);

	return {
		velocity: newVelocity,
		position: structuredClone(particle.position),
		attributes: particle.attributes ? structuredClone(particle.attributes) : undefined
	};
}

function step<TAttributes extends ParticleAttributes>(particle: Particle<TAttributes>): Particle<TAttributes> {
	if (particle.attributes?.static) {
		return structuredClone(particle);
	}

	const newPosition = Vector3.add(particle.position, particle.velocity);

	return {
		velocity: structuredClone(particle.position),
		position: newPosition,
		attributes: particle.attributes ? structuredClone(particle.attributes) : undefined
	};
}

const Particle3D = {
	create,
	applyForce,
	applyScalar,
	step
};

export { Particle, ParticleAttributes, Particle3D };
