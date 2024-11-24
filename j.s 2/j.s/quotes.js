arrayOfQuotes = [
    {
        "author": "Oscar Wilde",
        "quote": "Be yourself; everyone else is already taken."
    },
    {
        "author": "Frank Zappa",
        "quote": "So many books, so little time."
    },
    {
        "author": "Albert Einstein",
        "quote": "Two things are infinite: the universe and human stupidity."
    },
    {
        "author": "Marcus Tullius Cicero",
        "quote": "A room without books is like a body without a soul."
    },
    {
        "author": "Nelson Mandela",
        "quote": "Resentment is like drinking poison and waiting for your enemies to die."
    },
    {
        "author": "Elbert Hubbard",
        "quote": "Do not take life too seriously. You will not get out alive."
    },
];

function generatedQuote() {
    random = Math.floor(Math.random() * arrayOfQuotes.length + 1);
    document.getElementById("quote").innerHTML = `\"${arrayOfQuotes[random].quote}\"`;
    document.getElementById("author").innerHTML = `--${arrayOfQuotes[random].author}`;


}