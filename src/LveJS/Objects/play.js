import each from './each';
import ready from '../Utils/domReady';


export default function play() {

  each.call(this, function () {

    switch (this.type) {
      case 'video':
      case 'sprite':
        break;
      default:
        return;
    }

    if (this.element && this.element.play && this.element.play.call) {

      ready.call(this.element, () => {
        this.element.play();
        this.element.dataset.playing = 'true';
      });
      
    }

    this.spriteset.playing = true;

  });

  return this;

};