const players = [
  { name: 'Ana', team: 'red' },
  { name: 'Rodrigo', team: 'blue' },
  { name: 'Flávia', team: 'red' },
  { name: 'Marina', team: 'yellow' },
  { name: 'Giovanni', team: 'blue' }
];

const teamPlayers = players.reduce(function(acc, obj) {
    // current team color
    const team = obj.team;

    // verify if the team already exists in the acc
    if (!acc[team]) {
        // if not it creates an array in the position
        acc[team] = [];
    }

    // add the name to the array (no return here)
    acc[team].push(obj.name);

    // retunr the whole acc to the loop
    return acc;

}, {});

console.log(teamPlayers)
