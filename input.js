// setup interface to handle user input from stdin

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') {
    connection.write("Move: up");
  }
  if (key === '\u0061') {
    connection.write("Move: left");
  }
  if (key === '\u0073') {
    connection.write("Move: down");
  }
  if (key === '\u0064') {
    connection.write("Move: right");
  }
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