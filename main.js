// Interchangeable variables so everyone can personalize it with a name
// and a yes or no question.
var userName = 'Chase'
var userQuestion = 'Is it going to warm up this week?'

// Displays greeting to whoever enters their name
if (userName === userName) {
    console.log(`Hello, ${userName}`);
} 

// Displays the question asked
console.log(`${userQuestion}`);

// Creates a random number soon to be connected with word responses
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = ''

// Connects random numbers to word responses using switch expression

switch (randomNumber) {
    case 1:
        console.log('It is certain');
        break;
    case 2:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply hazy try again');
        break;
    case 4:
        console.log('Cannot predict now');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('My sources say no');
        break;
    case 7:
        console.log('Outlook not so good');
        break;
    case 8:
        console.log('Signs point to yes');
        break;
    case 0:
        console.log('Cannot determine at this moment');                                
}

// Connects random numbers to word responses using the else if expression
// Both expressions should yield the same results.

/*if (randomNumber === 1) {
    console.log('It is certain');
} else if (randomNumber === 2) {
    console.log('It is decidedly so');
} else if (randomNumber === 3) {
    console.log('Reply hazy try again');
} else if (randomNumber === 4) {
    console.log('Cannot predict now');
} else if (randomNumber === 5) {
    console.log('Do not count on it');
} else if (randomNumber === 6) {
    console.log('My sources say no');
} else if (randomNumber === 7) {
    console.log('Outlook not so good');
} else if (randomNumber === 8) {
    console.log('Signs point to yes');
} else if (randomNumber === 0) {
    console.log('Cannot determine at this moment');
}*/
