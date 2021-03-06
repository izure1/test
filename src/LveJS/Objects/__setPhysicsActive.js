export default function __setPhysicsActive(p, v) {

  let h;
  let r;

  h = this.__system__.physics;
  r = 0;

  h.information[p] = Number(!!v);

  for (let p in h.information) {

    r += h.information[p];

  }

  if (r === h.information.__length)
    h.active = true;

  else
    h.active = false;

  return this;

};