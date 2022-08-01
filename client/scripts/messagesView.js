// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(messagesData) {
    // TODO: Render _all_ the messages.
    // Iterate through messages data array
    MessagesView.$chats.html('');
    _.each(messagesData, function (message) {
      MessagesView.renderMessage(message);
      // Append to DOM in chats div
      // this.$chats.appendTo($chat);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $chat = $(MessageView.render(message));
    $chat.on('click', MessagesView.handleClick);
    $chat.appendTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log('add a friend');
  }

};