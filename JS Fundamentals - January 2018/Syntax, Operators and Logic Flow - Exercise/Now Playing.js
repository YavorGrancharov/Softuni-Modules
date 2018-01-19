function play(arr) {
    let obj = {};
    obj = {
        songName: arr[0],
        artistName: arr[1],
        duration: arr[2]
    };

    console.log(`Now Playing: ${obj.artistName} - ${obj.songName} [${obj.duration}]`);
}
play(['Number One', 'Nelly', '4:09']);