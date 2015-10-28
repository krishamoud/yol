Register = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const user = {
      profile:{
        name: $("#name").val()
      },
      username: $("#username").val(),
      email: $("#email").val(),
      password: $("#password").val()
    }
    Accounts.createUser(user, function(err,res){
      if(!err){
        FlowRouter.go("/");
      }
    });
  },
  render(){
    return (
      <div className="ion-view" view-title="Login" name="login-view">
        <form name="registration-form" onSubmit={this.handleSubmit}>
          <div className="ion-content padding">
            <div className="list list-inset">
              <label className="item item-input">
                <input type="text" id="name" placeholder="Full Name" ng-model="data.fullname" />
              </label>
              <label className="item item-input">
                <input type="text" id="username" placeholder="Username" ng-model="data.username" />
              </label>
              <label className="item item-input">
                <input type="email" id="email" placeholder="Email" ng-model="data.email" />
              </label>
              <label className="item item-input">
                <input type="password" id="password" placeholder="Password" ng-model="data.password" />
              </label>
            </div>
            <button className="button button-block button-calm" ng-click="login()">Register</button>
            <a className="ion-item" href="/login">Already a member? Sign in here.</a>
          </div>
        </form>
      </div>
    )
  }
})
