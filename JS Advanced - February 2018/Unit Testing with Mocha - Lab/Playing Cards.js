function makeCard(face, suit) {
    const VALID_FACE = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const VALID_SUIT = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };
    if (VALID_FACE.indexOf(face) < 0 || !VALID_SUIT.hasOwnProperty(suit)) {
        throw new Error('Invalid input');
    }
    return {
        face,
        suit,
        toString: function () {
            return face + VALID_SUIT[suit]
        }
    }
}

console.log('' + makeCard('A', 'S')); //	A♠
console.log('' + makeCard('10', 'H')); //	10♥
console.log('' + makeCard('1', 'C')); //	Error
