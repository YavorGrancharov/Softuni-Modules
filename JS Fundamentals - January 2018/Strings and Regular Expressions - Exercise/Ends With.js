function endWith(str, sub) {
    if (str.endsWith(sub)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
endWith('This sentence ends with fun?', 'fun?');