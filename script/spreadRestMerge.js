const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...rest] = topSixRestaurants;

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${rest}`);

// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    // Your code here
    let i = 2;
    for(let i = 0; i < args.length; i++);
    console.log(args[i]);
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");

// Part 3: Merge Arrays
const favoriteBaseballTeams = ["Yankees", "Mets", "Dodgers", "Giants", "Red Sox", "Cubs"];
const favoriteFootballTeams = ["Patriots", "Giants", "Jets", "Eagles", "Steelers", "Cowboys"];

const mergeTeams = [...favoriteBaseballTeams, ...favoriteFootballTeams];
console.log(mergeTeams);