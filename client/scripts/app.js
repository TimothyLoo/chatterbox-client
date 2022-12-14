// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // sanitize function
      var sanitizeHTML = function (str) {
        return str.replace(/[^\w. ]/gi, function (c) {
          return '&#' + c.charCodeAt(0) + ';';
        });
      };

      // sanitize
      for (let obj of data) {
        if (obj.roomname) { obj.roomname = sanitizeHTML(obj.roomname); }
        if (obj.text) { obj.text = sanitizeHTML(obj.text); }
        if (obj.username) { obj.username = sanitizeHTML(obj.username); }
      }

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      // Set messages data to message
      Messages.add(data);
      MessagesView.render(data);
      RoomsView.render(data);
    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
