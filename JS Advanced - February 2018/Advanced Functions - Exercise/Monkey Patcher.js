function monkeyPatcher(command) {
    let commands = {
        upvote: () => {
            this.upvotes++;
        },
        downvote: () => {
            this.downvotes++;
        },
        score: () => {
            let rating = 'new';
            let currentUpvotes = this.upvotes;
            let currentDownvotes = this.downvotes;
            let totalVotes = currentUpvotes + currentDownvotes;
            let totalScore = currentUpvotes - currentDownvotes;
            let newPost = totalVotes < 10;
            if (!newPost) {
                updateRating()
            }
            if (totalVotes > 50) {
                obfuscatePost();
            }
            return [currentUpvotes, currentDownvotes, totalScore, rating];

            function updateRating() {
                if (currentUpvotes / totalVotes > 0.66) {
                    rating = 'hot';
                }
                else if (currentUpvotes / totalVotes <= 0.66 && totalScore >= 0 && (currentUpvotes > 100 || currentDownvotes > 100)) {
                    rating = 'controversial';
                }
                else if (totalScore < 0) {
                    rating = 'unpopular';
                }
            }
            function obfuscatePost() {
                let biggerScore = Math.max(currentUpvotes, currentDownvotes);
                let inflation = Math.ceil(biggerScore * 0.25);
                currentUpvotes += inflation;
                currentDownvotes += inflation;
            }
        }
    };
    return commands[command]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
monkeyPatcher.call(post, 'downvote');       // (executed 50 times)
score = monkeyPatcher.call(post, 'score');     // [139, 189, -50, 'unpopular']
