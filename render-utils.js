
export function renderPoll(question, optionATitle, optionBTitle, optionAVotes, optionBVotes) {

    const pollEl = document.createElement('div');
    const optionOneEl = document.createElement('p');
    const optionTwoEl = document.createElement('p');
    const optionAVotesEl = document.createElement('p');
    const optionBVotesEl = document.createElement('p');

    pollEl.textContent = question;
    optionOneEl.textContent = optionATitle;
    optionTwoEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;

    pollEl.append(optionOneEl, optionTwoEl, optionAVotesEl, optionBVotesEl);

    return pollEl;
}
