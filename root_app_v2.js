const vDB = require('v_database');
const vRF = require('v_rifier');
// Setup basic express server
const V_App_Config = require("./.Vfg");
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = V_App_Config.PORT || 2500;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'PUBLIC')));

// Chatroom

let liveUsersCount = 0;

io.on('connection', (socket) => {
  let addedUser = false;
  //console.log(socket);

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('login user', async (username, password) => {
    if (addedUser) return;

    var user = await vDB.item.view('users', username);

    if (user !== false && user.password === password) {
      
      socket.username = username;
      ++liveUsersCount;
      addedUser = true;
      socket.emit('login', {
        liveUsersCount: liveUsersCount
      });
      // echo globally (all clients) that a person has connected
      socket.broadcast.emit('user joined', {
        username: socket.username,
        liveUsersCount: liveUsersCount
      });
      console.log('🔼 Login >> Username : ' + username);
    } else {
      socket.emit('login', false);
      console.log('❌ Login >>\n  Username: ' + username + ' ✅\n  Password '+password+' ❓');
      return false;
    }
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    if (addedUser) {
      --liveUsersCount;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        liveUsersCount: liveUsersCount
      });
    }
  });
});
