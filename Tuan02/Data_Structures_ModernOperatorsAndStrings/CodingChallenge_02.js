const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnabry',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // 1. Loop over the game.scored array and print each player name along with the goal number
  game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
  
  // 2. Calculate and log the average odd
  const odds = Object.values(game.odds);
  const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
  console.log(`Average odd: ${averageOdd}`);
  
  // 3. Print the 3 odds in a formatted way
  console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
  console.log(`Odd of draw: ${game.odds.x}`);
  console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
  
  // 4. Bonus: Create an object scorers
  const scorers = {};
  game.scored.forEach(player => {
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
  });
  console.log(scorers);
  