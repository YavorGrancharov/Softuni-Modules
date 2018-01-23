function palindrome(str) {
    let isPalindrome = true;
    for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
palindrome('haha');