const deckShuffle = deck => {
      const newDeck = deck.map(card => {
        card.isFlipped = false
        return card
    })
	return shuffler(newDeck);
};

const shuffler = deck => {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[j]] = [deck[j], deck[i]];
	}
	return deck;
};

const selectCardsFromDecks = (language, deck, ...args) => {
	console.log(deck);
};

export { deckShuffle, selectCardsFromDecks };
