import getFixture from '../Helpers/getFixture';


export default function __setPhysicsDestroy() {

  let B;

  B = this.__system__.physics.body;

  if (!B) {
    return this;
  }

  this.__system__.world.physics.destroyObject(B);
  delete this.__system__.physics.body;
  
  return this;

};