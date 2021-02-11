const cards1To9 = [
    { classAdd: 'one', digit: '1', bgColor: '#6F98A8' },
    { classAdd: 'two', digit: '2', bgColor: '#2B8EAD' },
    { classAdd: 'three', digit: '3', bgColor: '#2F454E' },
    { classAdd: 'four', digit: '4', bgColor: '#2B8EAD' },
    { classAdd: 'five', digit: '5', bgColor: '#2F454E' },
    { classAdd: 'six', digit: '6', bgColor: '#BFBFBF' },
    { classAdd: 'seven', digit: '7', bgColor: '#BFBFBF' },
    { classAdd: 'eight', digit: '8', bgColor: '#6F98A8' },
    { classAdd: 'nine', digit: '9', bgColor: '#2F454E' },
];

// Remove earlier contents on 'Card' div    
function removeAllDivsInsideCards() {
    const cards = document.querySelector('div.cards');
    cards1To9.map(card => {
        cards.innerHTML = '';
    })    
}

function displayCards() {
    // Remove earlier contents on 'Card' div
    removeAllDivsInsideCards();

    const cards = document.querySelector('div.cards');
    
    // Dynamically create elements (div>div>p) inside div and put value and style
    cards1To9.map(card => {
        let div = document.createElement('div');
        div.className = card.classAdd;
        let p = document.createElement('p');
        p.innerText = card.digit;
        div.style.background = card.bgColor;
        div.appendChild(p)
        cards.appendChild(div)
    })
}

function displayShuffledCards() {
    // Remove earlier contents on 'Card' div
    removeAllDivsInsideCards();
    
    const cards = document.querySelector('div.cards');
    
    // Clone and shuffle list
    cloneCards1To9 = [...cards1To9]
    shuffledList = cloneCards1To9.sort(() => Math.random() - 0.5);

    // Dynamically create elements (div>div>p) inside div and put value and style
    shuffledList.map(card => {
        let div = document.createElement('div');
        div.className = card.classAdd;
        let p = document.createElement('p');
        p.innerText = card.digit;
        div.style.background = card.bgColor;
        div.appendChild(p)
        cards.appendChild(div)
    })
}

displayCards()

const shuffle = document.querySelector('.shuffle');
const sort = document.querySelector('.sort');

shuffle.addEventListener('click', displayShuffledCards);
sort.addEventListener('click', displayCards);

