
import confetti from 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.module.min.mjs';

const DEADLINE = '2024-03-06T23:00:00Z'; // 23:00:00 UTC = 00:00:00 CET
const TIMES = 2;
const MIN_TIME = 1000;
const MAX_TIME = 2000;

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function _atRandomInterval( fn, n = 0 ) {
  if ( n >= TIMES ) return;
  const fnWrap = () => { fn(); _atRandomInterval( fn, n+1 ); }
  setTimeout( fnWrap, MIN_TIME + Math.random() * MAX_TIME );
}

_atRandomInterval( confetti );
confetti();

[ ...document.querySelectorAll('.dma-countdown') ].forEach(
  parent => {

    const dlTime = Date.parse( DEADLINE );
    const nowTime = Date.now();
    // confetti();

  }
);