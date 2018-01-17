function chess(n) {
    console.log('<div class="chessboard">');
    for (let row = 0; row < n; row++) {
        console.log('  <div>');
        for (let col = 0; col < n; col++) {
            if (row % 2 === 0) {
                if (col % 2 === 0) {
                    console.log('    <span class="black"></span>');
                }
                else {
                    console.log('    <span class="white"></span>');
                }
            }
            if (row % 2 !== 0) {
                if (col % 2 !== 0) {
                    console.log('    <span class="black"></span>');
                }
                else {
                    console.log('    <span class="white"></span>');
                }
            }
        }
        console.log('  </div>');
    }
    console.log('</div>');
}
chess(4);