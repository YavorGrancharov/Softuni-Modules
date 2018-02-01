function count(word, str) {
    let count = 0;
    while (true) {
        let startIndex = str.indexOf(word);
        if ( startIndex < 0) {
            break;
        }
        count++;
        str = str.substring(startIndex + 1);
    }
    console.log(count);
}
count('the', 'The quick brown fox jumps over the lay dog.');

count('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');