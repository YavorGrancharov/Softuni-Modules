function capitalizeWord(str) {
    let splitted = str.split(/\s+/);
    let concat = '';
    for (let i = 0; i < splitted.length; i++) {
        concat += letterToUpper(splitted[i] + ' ');
    }
    console.log(concat.trim());

    function letterToUpper(secInput) {
        return secInput.charAt(0).toUpperCase() + secInput.slice(1).toLowerCase();
    }
}

capitalizeWord('capitalize these words');
capitalizeWord('Was that Easy? tRY thIs onE for SiZe!');