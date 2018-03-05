function printDeckOfCards(arr) {
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

    for (let i = 0; i < arr.length; i++) {
        let face = arr[i].substring(0, arr[i].length - 1);
        let suit = arr[i][arr[i].length - 1];
        try {
            arr[i] = makeCard(face, suit)
        } catch (ex) {
            console.log('Invalid card: ' + arr[i]);
            return
        }
    }
    console.log(arr.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']); //	A♠ 10♦ K♥ 2♣
printDeckOfCards(['5S', '3D', 'QD', '1C']); //	Invalid card: 1C
