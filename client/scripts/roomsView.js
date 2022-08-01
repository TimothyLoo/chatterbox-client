// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  // TODO: Render out the list of rooms.
  render: (messagesData) => {
    // I - array of Obj
    // Iterate through array
    for (let messageObj of messagesData) {
      let alreadyRoom = false;
      // Iterate through rooms array
      for (let existRoom of Rooms._data) {
        if (existRoom === messageObj.roomname) {
          alreadyRoom = true;
        }
      }
      // If room doesn't exist, add to rooms data
      if (!alreadyRoom) { Rooms._data.push(messageObj.roomname); }
    }
    for (room of Rooms._data) { RoomsView.renderRoom(room); }
  },


  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    let $room = $('<option value="' + roomname + '">' + roomname + '</option>');
    $room.on('change', RoomsView.handleChange);
    $room.appendTo(RoomsView.$select);

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log(RoomsView.$select.val());
    MessagesView.$chats.html('');
    _.each(Messages._data, (message) => {
      if (message.roomname === RoomsView.$select.val()) {
        MessagesView.renderMessage(message);
      }
    });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let newRoom = prompt('What is the name of your new room?');
    console.log(newRoom);
    Rooms._data.push(newRoom);
    RoomsView.renderRoom(newRoom);
  }

};
