const boardElem = document.getElementById("chessboard");
const turnDisplay = document.getElementById("turn");
const aiLevelSelect = document.getElementById("aiLevel");
const restartBtn = document.getElementById("restartBtn");
const historyBox = document.getElementById("history");

const promotionModal = document.getElementById("promotionModal");
const promotionChoices = document.getElementById("promotionChoices");

const whiteTimerElem = document.getElementById("whiteTimer");
const blackTimerElem = document.getElementById("blackTimer");

const defaultBoard = [
  ['♜','♞','♝','♛','♚','♝','♞','♜'],
  ['♟','♟','♟','♟','♟','♟','♟','♟'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['♙','♙','♙','♙','♙','♙','♙','♙'],
  ['♖','♘','♗','♕','♔','♗','♘','♖']
];

const pieceValue = {
  '♔': 1000, '♕': 9, '♖': 5, '♗': 3, '♘': 3, '♙': 1,
  '♚': 1000, '♛': 9, '♜': 5, '♝': 3, '♞': 3, '♟': 1
};

let boardState = [];
let currentTurn = 'white';
let selected = null;
let movedPieces = {};
let aiLevel = "none";
let moveHistory = [];
let captured = { white: [], black: [] };
let timer = { white: 300, black: 300 };
let interval = null;
