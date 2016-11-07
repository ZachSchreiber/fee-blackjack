function runGame() {
    //function to pick a random number and assign it to a card in the deck.
    var display = document.getElementById('cards');
    var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
    var cardValue = 0;

    function hit() {
        checkResult(false, true);
        var card = Math.round(Math.random() * cards.length);
        display.innerHTML = cards[card];
    }

    /**
     * Check the result of the current cards and alert the game result
     *
     * @param  {Boolean} standing  Whether or not the player is standing
     * @param  {Boolean} hitting   Whether or not the player is hitting
     * @return {void}
     */
    function checkResult(standing, hitting) {
        hand = display.innerHTML.split(' ');
        //  var cards = card or cards currently listed on the display.


        hand.forEach(function(card, i) {

            if (card[i] === 'J') {
                cardValue += 10;
            } else if (card[i] === 'Q') {
                cardValue += 10;
            } else if (card[i] === 'K') {
                cardValue += 10;
            } else if (card[i] === 'A') {
                cardValue += 11;
            } else if (Number(card)) {
                cardValue = cardValue + Number(card);
            }

        });
        console.log('cardvalue is: ' + cardValue);
        console.log('card is: ' + card);

          if (cardValue < 15 && standing) {
              alert('Dealer wins.');
          }
        else if (cardValue < 18 && standing) {
              alert('Push!');
          }
        else if (cardValue > 18 && hitting) {
              alert('You win!');
          }
        else if (cardValue === 21) {
              alert('You win!');
        }
        else if (cardValue > 21) {
              alert('You Bust.');
          }

        display.innerHTML = ' ';
        card = Math.round(Math.random() * cards.length);
        display.innerHTML = cards[card];

    }
    //   If stand button is clicked, trigger stand function
    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true, false);
    });

    //If hit button is clicked, trigger hit function
    document.getElementById('hit').addEventListener('click', function() {
        checkResult(false, true);

    });

    // Start the game with a hand of two cards
    card = Math.round(Math.random() * cards.length);
    display.innerHTML = cards[card];
    card = Math.round(Math.random() * cards.length);
    display.innerHTML = display.innerHTML + ' ' + cards[card];
}
 runGame();
