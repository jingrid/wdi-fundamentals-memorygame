var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	},
];

var cardsInPlay = [];


var checkForMatch = function() {
//var cardImage = this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} 
		else {
			alert("Sorry, try again.");
		}
	};
};

var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId.getAttribute('data-id')].rank);
	cardId.setAttribute('src', cards[cardId.getAttribute('data-id')].cardImage);
	
	if (cardsInPlay.length === 2) {
		checkForMatch(cardId);
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);

		cardElement.addEventListener('click', function() {
			flipCard(this);
		});
	}

};

createBoard();
