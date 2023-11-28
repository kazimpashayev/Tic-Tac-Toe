export const winningRules = [
  // Rows
  { rule: [0, 1, 2], winningLineClass: 'winning-line-row-1' },
  { rule: [3, 4, 5], winningLineClass: 'winning-line-row-2' },
  { rule: [6, 7, 8], winningLineClass: 'winning-line-row-3' },

  // Columns
  { rule: [0, 3, 6], winningLineClass: 'winning-line-col-1' },
  { rule: [1, 4, 7], winningLineClass: 'winning-line-col-2' },
  { rule: [2, 5, 8], winningLineClass: 'winning-line-col-3' },

  // Diagonals
  { rule: [0, 4, 8], winningLineClass: 'winning-line-diagonal-1' },
  { rule: [2, 4, 6], winningLineClass: 'winning-line-diagonal-2' },
];
