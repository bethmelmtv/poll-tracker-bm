import { renderPoll } from '/.render-utils.js';

// import functions and grab DOM elements

const startButtonEl = document.querySelector('.start-button');
const pastpollEl = document.querySelector('.past-polls-container');
const currentpollEl = document.querySelector('.current-poll');

const form = document.querySelector('form');

const closePollButton = document.querySelector('.close-poll');
 
const defaultQuestion = document.querySelector('.default-question');

const optionAEl = document.querySelector('.option-a');
const optionOneAddButton = document.querySelector('.option-one-add');
const optionOneSubtractButton = document.querySelector('.option-one-subtract');

const optionBEl = document.querySelector('.option-b');
const optionTwoAddButton = document.querySelector('.option-two-add');
const optionTwoSubtractButton = document.querySelector('.option-two-subtract');

const optionAVotesEl = document.querySelector('.option-a-votes');
const optionBVotesEl =  document.querySelector('.option-b-votes');

//state
let optionAVotes = 0;
let optionBVotes = 0;
let defaultQuestion = '';
let optionAtitle = '';
let optionBtitle = '';


//were creating an array so we can push each poll object into it,
//so we can loop through it 
pastPolls = [];



optionOneAddButton.addEventListener('click', () => {


});

optionOneSubtractButton.addEventListener('click', () => {


});

optionTwoAddButton.addEventListener('click', () => {


});

optionTwoSubtractButton.addEventListener('click', () =>{


});


closePollButton.addEventListener('click', () =>{


});
