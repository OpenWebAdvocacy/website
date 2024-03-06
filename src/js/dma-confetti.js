
import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.module.min.mjs';

const DEADLINE = '2024-03-06T23:00:00Z'; // 23:00:00 UTC = 00:00:00 CET

const TIMES = 5;
const MIN_TIME = 500;
const MAX_TIME = 2000;

const CONFETTI_GLOBAL_OPTS = {
  colors: ['#000'],
  scalar: 1.5,
};
const CONFETTI_OPTS = {
  resize: true,
  disableForReducedMotion: true,
}

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function _init() {

  clearInterval( initInterval );

  const intersectionObs = new IntersectionObserver( entries => {
    entries.forEach( entry => {
      if ( !entry.isIntersecting ) return;
      const confettiFn = weakMap.get( entry.target );
      confettiFn.reset();
      _atRandomInterval(() => {
        confettiFn( CONFETTI_GLOBAL_OPTS )
      });
      confettiFn( CONFETTI_GLOBAL_OPTS )
    })
  });

  [ ...document.querySelectorAll('.dma-countdown') ].forEach(
    parent => {
      weakMap.set(
        parent,
        confetti.create( parent.querySelector('canvas'), CONFETTI_OPTS )
      );
      intersectionObs.observe( parent );
    }
  );

}

function _atRandomInterval( fn, n = 0 ) {
  if ( n >= TIMES ) return;
  const fnWrap = () => { fn(); _atRandomInterval( fn, n+1 ); }
  setTimeout( fnWrap, MIN_TIME + ( Math.random() * MAX_TIME ) );
}

function _now() {
  return Date.now();
}

const dlTime = Date.parse( DEADLINE );
const weakMap = new WeakMap();

const initInterval = setInterval(() => {
  if ( dlTime <= _now() ) _init();
}, 1000);
