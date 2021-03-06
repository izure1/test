import clickCheck from '../Utils/clickCheck';


function mouseQuery(objects, pos) {

  let r;
  let p, s;
  let rw, rh, rx, ry, rs;

  r = null;

  for (let t of objects) {

    if (!t.__isDisplay()) continue;

    p = t.__system__.position;
    s = t.__system__.style;

    rs = p.s;
    rw = s.width * rs;
    rh = s.height * rs;
    rx = rw * s.rx;
    ry = rh * s.ry;
    rx += p.x;
    ry += p.y;

    if (clickCheck(pos, [p.x, p.y], [rw, rh], [rx, ry], -t.style.rotate)) {
      r = t;
      break;
    }

  }

  return r;

}


export default function worldQuery(e) {

  let a, t;
  let m, b;

  a = this.renderer.getDrawArguments();
  m = this.cache.mouseSelected;
  b = null;

  if (!a.ready) {
    return;
  }

  a = a.value;
  t = mouseQuery(this.renderer.objects, [e.offsetX, e.offsetY]);

  if (t) {
    t.emit(e.type, e);
  }


  if (m !== t) {

    if (m) {
      m.emit('mouseout', e);
      b = null;
    }

    if (t) {
      t.emit('mouseover', e);
      b = t;
    }

    this.cache.mouseSelected = b;

  }


};