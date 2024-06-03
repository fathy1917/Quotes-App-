let quotes = [    
{'author': '-- Oscar Wilde --', 
'quote': '"Be yourself everyone else is already taken."'},

{'author': '-- Thanos --', 
'quote': '"The hardest choices require strongest wills."'},

{'author': '-- George Eliot --', 
'quote': '"It is never too late to be what you might have been."'},

{'author': '-- Albert Einstein --', 
'quote': '"Anyone who has never made a mistake has never tried anything new."'},

]

//     console.log(quotes[Math.trunc(Math.random()*quotes.length)]);

var previouseRandom = -1;

function randomQuotes (){
    var random = Math.floor(Math.random()*quotes.length );
    while(random == previouseRandom){
    var random = Math.floor(Math.random()*quotes.length );
    }
    document.querySelector('.quoteOutput').textContent = `${quotes[random].quote}`;
    document.querySelector('.authorOutput').textContent = `${quotes[random].author}`;

    previouseRandom = random;
}
