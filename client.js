const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // messgae when connected to server
  conn.on("data", (message) => {
    console.log("Successfully connected to game server");
    message;
  });

  // initials for snake
  conn.on("connect", () => {
    conn.write("Name: SAO");
  });
  
  // conn.write("Move: up");

  // handle incoming data and print message to player
  // conn.on("data", (data) => {
  //   console.log(data);
  // })

  return conn;
};

module.exports = { connect };