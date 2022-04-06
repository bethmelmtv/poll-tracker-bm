import { renderPoll } from './render-utils.js';

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
const optionBVotesEl = document.querySelector('.option-b-votes');

//state
let optionAVotes = 0;
let optionBVotes = 0;
let question = '';
let optionAtitle = '';
let optionBtitle = '';


//were creating an array so we can push each poll object into it,
//so we can loop through it 
let pastPolls = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    question = data.get('input-question');
    optionAtitle = data.get('option-one-input');
    optionBtitle = data.get('option-two-input');
  //these lines  are updating items in DOM,
  //then we will call displayCurrentPoll to update the textcontent

    //mutates DOM to display current state of current poll
    displayCurrentPoll();
    form.reset();
});


optionOneAddButton.addEventListener('click', () => {
    optionAVotes++;
    optionAVotesEl.textContent = optionAVotes;
});

optionOneSubtractButton.addEventListener('click', () => {
    optionAVotes--;
    optionAVotesEl.textContent = optionAVotes;
});

optionTwoAddButton.addEventListener('click', () => {
    optionBVotes++;
    optionBVotesEl.textContent = optionBVotes;
});

optionTwoSubtractButton.addEventListener('click', () =>{
    optionBVotes--;
    optionBVotesEl.textContent = optionBVotes;
});

function displayCurrentPoll() {

  //   currentpollEl.textContent = ''; //clearing out the dom 
  // // mutates DOM to display current state of current poll//
  // //will be called in form submit function 
    defaultQuestion.textContent = question;
    optionAEl.textContent = optionAtitle;
    optionBEl.textContent = optionBtitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;

    // const currentPoll = renderPoll(defaultQuestion, optionAEl, optionBEl, optionAVotesEl, optionBVotesEl);
    // currentpollEl.append(currentPoll);

}


function displayAllPolls() {
// clears out DOM and appends to poll div using current state of past polls

    pastpollEl.textContent = ''; // clearing out the DOM 

    const polls = pastPolls;

    for (let poll of polls) {
        const pollEl = renderPoll(poll.question, poll.optionAtitle, poll.optionBtitle, poll.optionAVotes, poll.optionBVotes);
        pastpollEl.append(pollEl);
    }
    return pastpollEl;
}

displayAllPolls(); 
displayCurrentPoll();


closePollButton.addEventListener('click', () => { 
  
    const poll = { 
        question: question,
        optionAtitle: optionAtitle,
        optionBtitle: optionBtitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes
    };

    pastPolls.push(poll);

    optionAVotes = 0;
    optionBVotes = 0;
    question = '';
    optionAtitle = '';
    optionBtitle = '';
    
    displayCurrentPoll();

    displayAllPolls();

});






// displayAllPolls() {
// // clears out DOM and appends to poll div using current state of past polls
  
// let pastPolls = 

// currentpollEl 
//   pastPolls.push(currentpollEl)

//   for(let pollEl in pastPolls) {
//     const poll= renderPoll(x,w,y,z,e,e)
//     return poll
//   }

//   pastpollEl.append(poll)

// //clearing out Dom
//   defaultQuestion.textContent = '';
//   optionAEl.textContent='';
//   optionBEl.textContent = '';
//   optionAVotesEl.textContent = '';
//   optionBVotesEl.textContent = '';

// }


// // }
// // // clears out DOM and appends to poll div using current state of past polls

// // // renderPoll(poll) :
// // //  returns DOM node

// // closePollButton.addEventListener('click', () => {

// //     let currentPoll = {};
// //     optionAVotesEl.textContent = 0;
// //     optionBVotesEl.textContent = 0;
// //     optionBEl.textContent = '';
// //     optionAEl.textContent = '';
// //     defaultQuestion.textContent = '';
 
// // });

