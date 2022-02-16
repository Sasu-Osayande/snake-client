// setup interface to handle user input from stdin
const { SAYINGS, MOVE_UP_KEY, EXIT, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, SNAKE, LAUGH, BYE } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

const handleUserInput = function (key) {
  // for (singleKey in KEYS) {
//   if (MOVE_UP_KEY) {
//     let value = Object.values(singleKey);
//     connection.write(value);
//   }
// }

  if (key === EXIT) {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  // for (const saying in SAYINGS) {
  //   if (SAYINGS[saying] === SAYINGS[SNAKE]) {
  //     let value = Object.values(SAYINGS);
  //     return connection.write(value);
  //   }
  //   if (SAYINGS[LAUGH]) {
  //     let value = Object.values(saying);
  //     return connection.write(value);
  //   }
  //   if (SAYINGS[BYE]) {
  //     let value = Object.values(saying);
  //     return connection.write(value);
  //   }
  // }
  if (key === '\u0070') {
    connection.write("Say: ssss");
  }
  if (key === '\u0069') {
    connection.write("Say: teehee");
  }
  if (key === '\u006F') {
    connection.write("Say: ttyl");
  }
}

stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };