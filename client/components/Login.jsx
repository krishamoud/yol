Login = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const $user = $("#username").val();
    const $password = $("#password").val();
    Meteor.loginWithPassword($user, $password, function(err,res){
      if(!err){
        FlowRouter.go("/");
      }
    });
  },
  render(){
    return (
      <div className="ion-view" view-title="Login" name="login-view">
        <form name="login-form" onSubmit={this.handleSubmit}>
          <div className="ion-content padding">
            <div className="list list-inset">
              <label className="item item-input">
                <input type="text" id="username" placeholder="Username" ng-model="data.username" />
              </label>
              <label className="item item-input">
                <input type="password" id="password" placeholder="Password" ng-model="data.password" />
              </label>
            </div>
            <button className="button button-block button-calm" ng-click="login()">Login</button>
            <a className="ion-item" href="/register">Not a member? Register here.</a>
          </div>
        </form>
      </div>
    )
  }
})
