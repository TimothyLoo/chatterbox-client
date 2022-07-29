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
    // _.each(messagesData, function (message) {
    //   console.log(MessagesView.renderMessage(message));
    //   // Call Messageview.render to parse into html
    //   let $chat = $(MessageView.render(message));
    //   console.log($chat);
    //   console.log(MessagesView.$chats);
    //   $chat.appendTo(MessagesView.$chats);
      // Append to DOM in chats div
      //this.$chats.appendTo($chat);
    // });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let $chat = $(MessageView.render(message));
    console.log($chat);
    $chat.appendTo(MessageView.$chats);
    console.log(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};