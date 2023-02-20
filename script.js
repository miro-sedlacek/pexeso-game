const cards = [
	{ id: 1, img: 'Podcast Episode (1).jpg' },
	{ id: 2, img: 'image2.png' },
	{ id: 3, img: 'image3.png' },
	{ id: 4, img: 'image4.png' },
	{ id: 5, img: 'image5.png' },
	{ id: 6, img: 'image6.png' }
];

let firstCard = null;
let secondCard = null;

function createCards() {
	let shuffledCards = shuffle(cards.concat(cards));
	shuffledCards.forEach(card => {
		const cardElement = document.createElement('div');
		cardElement.classList.add('card');
		cardElement.setAttribute('data-id', card.id);
		cardElement.style.backgroundImage = `url(${card.img})`;
		cardElement.addEventListener('click', onCardClick);
		document.querySelector('.game-board').appendChild(cardElement);
	});
}

function onCardClick() {
	if (this === firstCard) {
		return;
	}
	if (!firstCard) {
		firstCard = this;
		this.classList.add('selected');
		return;
	}
	if (!secondCard) {
		secondCard = this;
		this.classList.add('selected');
		setTimeout(checkForMatch, 1000);
	}
}

function checkForMatch() {
	if (firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id')) {
		firstCard.removeEventListener('click', onCardClick);
		secondCard.removeEventListener('click', onCardClick);
	} else {
		firstCard.classList.remove('selected');
		secondCard.classList.remove('selected');
	}
	firstCard = null;
	secondCard = null;
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

createCards();
