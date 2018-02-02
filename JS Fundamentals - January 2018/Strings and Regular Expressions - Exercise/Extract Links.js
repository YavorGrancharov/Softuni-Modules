function extract(arr) {
    let regex = /(www\.[a-zA-Z0-9-]+(\.[a-z]+)+)/;
    let matches, result = [];
    for (let i = 0; i < arr.length; i++) {
        if (matches = regex.exec(arr[i])) {
            result.push(matches[1]);
        }
    }
    console.log(result.join(' \n'))
}
extract(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:',
    'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko']);

extract(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
'"I am very satisfied with their services" - ww.ivan.bg',
'"Best Hotel Services!&quot; - www.rebel21.sedecrem.moc']);

extract(['www.sea-of-text.bg', 'www.Instruments.rom.com.trombone.cosdfm.sfm.s',
'www.scream.for.ice.cream']);