
/*jshint esversion: 6 */

console.info("[ V__ARENA - < Var__v-0.1-72 > ]");
(function() {
  const FADE_TIME = 150; // ms
  const TYPING_TIMER_LENGTH = 400; // ms
  const COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  const vDOM = (elemSelector = null) => {
    if (elemSelector === null) {
      return document;
    } else {
      var elem = document.querySelector(elemSelector);
      return elem;
    }
  };
  // Initialize variables
  const $window = window;
  const $usernameInput = vDOM('.usernameInput'); // Input for username
  const $passwordInput = vDOM('.passwordInput'); // Input for password
  const $messages = vDOM('.messages');           // Messages area
  const $inputMessage = vDOM('.inputMessage');   // Input message input box

  const $loginPage = vDOM('.login.page');        // The login page
  const $chatPage = vDOM('.chat.page');          // The chatroom page

  const socket = io();

  // Prompt for setting a username
  let username;
  let connected = false;
  let typing = false;
  let lastTypingTime;
  let $currentInput = $usernameInput;

  const addParticipantsMessage = (data) => {
    let message = '';
    if (data.liveUsersCount === 1) {
      message += `there's 1 participant`;
    } else {
      message += `there are ${data.liveUsersCount} participants`;
    }
    log(message);
  };

  // Sets the client's username
  const setUsername = () => {
    username = cleanInput($usernameInput.value.trim());
    var password = cleanInput($passwordInput.value.trim());

    // If the username is valid
    if (username && password) {
      // Tell the server your username
      socket.emit('login user', username, password);
    } else {
      alert('username or password is missing or invalid');
    }
  };

  // Sends a chat message
  const sendMessage = () => {
    let message = $inputMessage.value;
    // Prevent markup from being injected into the message
    message = cleanInput(message);
    // if there is a non-empty message and a socket connection
    if (message && connected) {
      $inputMessage.value = "";
      addChatMessage({ username, message });
      // tell server to execute 'new message' and send along one parameter
      socket.emit('new message', message);
    }
  };

  // Log a message
  const log = (message, options) => {
    const $el = '<li class="log">'+(message)+'</li>';
    addMessageElement($el, options);
  };

  // Adds the visual chat message to the message list
  const addChatMessage = (data, options = {}) => {
    // Don't fade the message in if there is an 'X was typing'
    const $typingMessages = getTypingMessages(data);
    if ($typingMessages.length !== 0) {
      options.fade = false;
      $typingMessages.forEach( item => {
        item.remove();
      });
    }

    const $usernameDiv = '<span class="username" style="color : '+getUsernameColor(data.username)+'">'+data.username+'</span>';
    const $messageBodyDiv = '<span class="messageBody">'+(data.message)+'</span>';

    const typingClass = data.typing ? 'typing' : '';
    const $messageDiv = '<li class="message '+typingClass+'" username="'+data.username+'">'+$usernameDiv + $messageBodyDiv + '</li>';

    addMessageElement($messageDiv, options);
  };

  // Adds the visual chat typing message
  const addChatTyping = (data) => {
    data.typing = true;
    data.message = 'is typing';
    addChatMessage(data);
  };

  // Removes the visual chat typing message
  const removeChatTyping = (data) => {
    getTypingMessages(data).forEach( item => {
      item.remove();
    });
  };

  // Adds a message element to the messages and scrolls to the bottom
  // el - The element to add as a message
  // options.fade - If the element should fade-in (default = true)
  // options.prepend - If the element should prepend
  //   all other messages (default = false)
  const addMessageElement = (el, options) => {
    const $el = el;
    // Setup default options
    if (!options) {
      options = {};
    }
    if (typeof options.fade === 'undefined') {
      options.fade = true;
    }
    if (typeof options.prepend === 'undefined') {
      options.prepend = false;
    }

    // Apply options
    //if (options.fade) {
    //  $el.hide().fadeIn(FADE_TIME);
    //}
    if (options.prepend) {
      $messages.insertAdjacentHTML('afterbegin', $el);
    } else {
      $messages.insertAdjacentHTML('beforeend', $el);
    }
    // First check that the element has child nodes
    if ($messages.hasChildNodes()) {
      let children = $messages.childNodes;
      console.info("CHILDREN >> " + children.length);
      for (let i = 0; i < children.length; i++) {
        // do something with each child as children[i]
        // NOTE: List is live! Adding or removing children will change the list's `length`
        children[0].scrollTop = children[0].scrollHeight;
      }
    }
  };

  // Prevents input from having injected markup
  const cleanInput = (input) => {
    return input;
  };

  // Updates the typing event
  const updateTyping = () => {
    if (connected) {
      if (!typing) {
        typing = true;
        socket.emit('typing');
      }
      lastTypingTime = (new Date()).getTime();

      setTimeout(() => {
        const typingTimer = (new Date()).getTime();
        const timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
          socket.emit('stop typing');
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  };

  // Gets the 'X is typing' messages of a user
  const getTypingMessages = (data) => {
    return document.querySelectorAll('.typing.message[username="'+data.username+'"]');
  };
  // Gets the color of a username through our hash function
  const getUsernameColor = (username) => {
    // Compute hash code
    let hash = 7;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + (hash << 5) - hash;
    }
    // Calculate color
    const index = Math.abs(hash % COLORS.length);
    return COLORS[index];
  };

  // Keyboard events

  window.addEventListener('keydown', event => {
    
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {
        sendMessage();
        socket.emit('stop typing');
        typing = false;
      } else {
        setUsername();
      }
    }
  });

  $inputMessage.addEventListener('input', () => {
    updateTyping();
  });

  // Click events

  // Focus input when clicking anywhere on login page
  //$loginPage.addEventListener('click',() => {
  //  $currentInput.focus();
  //});

  // Focus input when clicking on the message input's border
  //$inputMessage.addEventListener('click',() => {
  //  $inputMessage.focus();
  //});

  // Socket events

  // Whenever the server emits 'login', log the login message
  socket.on('login', (data) => {
    if (data !== false) {
      
      $loginPage.style.display = "none";
      $chatPage.style.display = "list-item";
      $loginPage.removeEventListener('click', ()=>{});
      $currentInput = $inputMessage;
      connected = true;
      // Display the welcome message
      const message = 'Welcome to Socket.IO Chat - ';
      log(message, {
        prepend: true
      });
      addParticipantsMessage(data);
    } else {
      alert("Bad Login Info");
    }
  });

  // Whenever the server emits 'new message', update the chat body
  socket.on('new message', (data) => {
    addChatMessage(data);
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', (data) => {
    log(`${data.username} joined`);
    addParticipantsMessage(data);
  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', (data) => {
    log(`${data.username} left`);
    addParticipantsMessage(data);
    removeChatTyping(data);
  });

  // Whenever the server emits 'typing', show the typing message
  socket.on('typing', (data) => {
    addChatTyping(data);
  });

  // Whenever the server emits 'stop typing', kill the typing message
  socket.on('stop typing', (data) => {
    removeChatTyping(data);
  });

  socket.on('disconnect', () => {
    log('you have been disconnected');
  });

  socket.on('reconnect', () => {
    log('you have been reconnected');
    if (username) {
      socket.emit('add user', username);
    }
  });

  socket.on('reconnect_error', () => {
    log('attempt to reconnect has failed');
  });

})();


