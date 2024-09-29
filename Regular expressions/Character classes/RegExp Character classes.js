const chessStory = "He played the King in a8 and she moved her Queen in c2.";
const regexpCoordinates = /\w\d/g;
console.log(chessStory.match(regexpCoordinates));

const moods = 'happy 🙂, confused 😕, sad 😢';
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons));