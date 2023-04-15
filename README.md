# Particle 3D library

A simple light weight particle library. All utilities are immutable and return a new particle object literal.

# Example
```ts
const stationaryParticle = Particle3D.create();

const gravityForce = Vector3.create(0,-1);

const movedParticle = Particle3D.applyForce(stationaryParticle, gravityForce);
// movedParticle === {position: {x:0, y:-1, z:0}, velocity: {x:0, y:-0, z:0}}


```
