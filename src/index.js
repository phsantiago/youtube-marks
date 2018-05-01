import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import waitForElement from "wait-for-element";

const MARKER = 'n';
const JUMPER = '\''

const keyUps = fromEvent(document, 'keyup')

const state = 0;

setTimeout(() => {
    console.log('AAAAAAAAAAA')

    console.log(player.getCurrentTime);

    const markCreation = keyUps.pipe(
      filter(e => e.key === MARKER),
      map(e => {
        e.preventDefault();
        return e;
      })
    ).subscribe(currTime => {
      chrome.tabs.executeScript(null, `document.getElementById("movie_player").getCurrentTime()`,
        console.log)
      console.log(state);
    })

    const markJump = keyUps.pipe(
      filter(e => e.key === JUMPER),
      map(() => state)
    ).subscribe(markTime => {
      player.seekTo(markTime)
      console.log('going to', markTime)
    })
}, 2000)
