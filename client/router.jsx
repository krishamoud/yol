FlowRouter.route( '/', {
  action: function() {
    if(!Meteor.user() && !Meteor.loggingIn()){
      FlowRouter.go("/register");
    }
    ReactLayout.render(AppBody, {
      content: <Home />
    });
  }
});

FlowRouter.route( '/other', {
  action: function() {
    if(!Meteor.user() && !Meteor.loggingIn()){
      FlowRouter.go("/register");
    }
    ReactLayout.render(AppBody, {
      content: <Other />
    });
  }
});

FlowRouter.route( '/settings', {
  action: function() {
    if(!Meteor.user() && !Meteor.loggingIn()){
      FlowRouter.go("/register");
    }
    ReactLayout.render(AppBody, {
      content: <Settings />
    });
  }
});

FlowRouter.route( '/login', {
  action: function() {
    ReactLayout.render(AppBody, {
      content: <Login />
    });
  }
});

FlowRouter.route( '/register', {
  action: function() {
    ReactLayout.render(AppBody, {
      content: <Register />
    });
  }
});
