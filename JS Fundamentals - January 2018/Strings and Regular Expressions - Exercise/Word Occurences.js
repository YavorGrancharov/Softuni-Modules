function occurences(str, word) {
    //let splitted = str.split(/([^\w’]+)/g);
    let regex = new RegExp(`(${word})\\b`, 'gi');
    let res = str.match(regex);
    res = res === null ? 0 : res.length;
    console.log(res);
}
occurences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
occurences('How do you plan on achieving that? How? How can you even think of that?','how');
occurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');