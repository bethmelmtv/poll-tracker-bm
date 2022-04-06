import { renderPoll } from '/.render-utils.js';

// import functions and grab DOM elements

const startButtonEl = document.querySelector('.start-button');
const pastpollEl = document.querySelector('.past-polls-container');
const currentpollEl = document.querySelector('current-poll');

const form = document.querySelector('form');

const closePollButton = document.querySelector('.close-poll');