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
  
  // 1. Create player arrays for each team
  const [players1, players2] = game.players;
  
  // 2. Goalkeeper and field players for Bayern Munich (team 1)
  const [gk, ...fieldPlayers] = players1;
  
  // 3. Create an array 'allPlayers' containing all players of both teams
  const allPlayers = [...players1, ...players2];
  
  // 4. Create a new array 'players1Final' with substitutes for team1
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  // 5. Create variables for each odd
  const { team1, x: draw, team2 } = game.odds;
  
  // 6. Write a function to print goals
  function printGoals(...players) {
    console.log(`${players.length} goals were scored.`);
    players.forEach(player => console.log(player));
  }
  
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  
  // 7. Print which team is more likely to win
  team1 < team2 && console.log('Team 1 is more likely to win');
  team2 < team1 && console.log('Team 2 is more likely to win');
  