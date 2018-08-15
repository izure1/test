import LveJSObjectSession from './LveJSObjectSession';

import LveJSHashTable from './Managers/LveJSHashTable';
import LveJSRenderer from './Managers/LveJSRenderer';
import LveJSCache from './Managers/LveJSCache';

import LveQuery from './LveQuery';

import SuppressJob from './Utils/SuppressJob';

// Functions
import FnInstanceOf from './Functions/instanceof';
import FnCheckMobile from './Functions/checkMobile';
import FnCurrent from './Functions/current';
import FnReady from './Functions/ready';
import FnInit from './Functions/init';
import FnStart from './Functions/start';
import FnPlay from './Functions/play';
import FnPause from './Functions/pause';
import FnCapture from './Functions/capture';
import FnOn from './Functions/on';
import FnOff from './Functions/off';
import FnRequestCaching from './Functions/requestCaching';
import FnBox2d from './Functions/box2d';

import B from '../External/Box2D/Box2D';


function Lve() {

  this.renderer = new LveJSRenderer();

  this.hashTable = new LveJSHashTable();
  this.suppressJob = new SuppressJob();
  this.cache = new LveJSCache();
  this.queue = [];
  this.events = {};
  this.box2d = B();
  this.physics = new this.box2d.b2World(new this.box2d.b2Vec2(0, -300), false);

  this.version = '3.0.0';

  let self = this;
  this.lve = function (u = null) {

    return new LveJSObjectSession(self, u, LveQuery.call(self, u));

  };



  // Set LveJS Functions for user
  this.lve.instanceof = FnInstanceOf.bind(this);
  this.lve.checkMobile = FnCheckMobile.bind(this);
  this.lve.ready = FnReady.bind(this);
  this.lve.init = FnInit.bind(this);
  this.lve.start = FnStart.bind(this);
  this.lve.play = FnPlay.bind(this);
  this.lve.pause = FnPause.bind(this);
  this.lve.capture = FnCapture.bind(this);
  this.lve.on = FnOn.bind(this);
  this.lve.off = FnOff.bind(this);
  this.lve.requestCaching = FnRequestCaching.bind(this);
  this.lve.box2d = FnBox2d.bind(this);

  this.lve.current = FnCurrent.call(this);



  /*
   *
   * end define properties
   * 
   */

  if (this instanceof Lve) return this.lve;
  else {
    throw 'Class constructor a cannot be invoked without \'new\'';
  }

}

export default Lve;