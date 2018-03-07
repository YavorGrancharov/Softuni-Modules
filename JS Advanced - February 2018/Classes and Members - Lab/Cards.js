let result = (function () {
    const Suits = {
        SPADES: "\u2660", // ♠
        HEARTS: "\u2661", // ♥
        DIAMONDS: "\u2662", // ♦
        CLUBS: "\u2667" // ♣
    };
    const Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        set face(newFace) {
            if (!Faces.includes(newFace)) {
                throw new TypeError('Invalid card face:' + newFace);
            }
            this._face = newFace;
        }

        get face() {
            return this._face;
        }

        set suit(newSuit) {
            if (!Object.keys(Suits).map(card => card = Suits[card]).includes(newSuit)) {
                throw new TypeError('Invalid card suit:' + newSuit);
            }
            this._suit = newSuit;
        }

        get suit() {
            return this._suit;
        }

        toString() {
            return this._face + this._suit;
        }
    }

    return {Suits, Card}
})();

let Card = result.Card;
let Suit = result.Suits;

let card = new Card('2', Suit.SPADES);
console.log(card.toString());

//Throw Error
let invalidCard = new Card('1', Suit.DIAMONDS);
console.log(invalidCard.to());