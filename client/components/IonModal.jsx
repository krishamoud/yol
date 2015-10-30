IonModal = React.createClass({
  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal-wrapper">
          <div className="modal">
            <div className="bar bar-light bar-header">
                {this.props.children}
            </div>
            <div className="content overflow-scroll has-header">
              <QuestionForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

Backdrop = React.createClass({
  render() {
    return (
      <div className="modal-backdrop active"></div>
    )
  }
})


QuestionForm = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    const handle = Meteor.subscribe("userFriends");
    return {
      ready: handle.ready(),
      user: Meteor.user(),
    }
  },
  getInitialState() {
    return {
      friendList: false,
      question: "",
    }
  },
  showFriends(){
    const q = React.findDOMNode(this.refs.textInput).value.trim();
    this.setState({friendList:true, question:q});
  },
  showQuestion(){
    const q = this.state.question;
    this.setState({friendList:false, question:q});
  },
  renderFriends(){
    const user = this.data.user;
    if(this.data.ready){
      return user.friends.map((friend) => {
        return (
          <div className="item item-button-right">
            {friend.profile.name}
            <button className="button button-positive">
              <i className="icon ion-ios-telephone"></i>
            </button>
          </div>
        )
      });
    } else {
      return <h1>Loading...</h1>
    }

  },
  render() {
    return (
      <div className="list">
        <label className="item item-input">
        {
          this.state.friendList ?
          <p className="title">{this.state.question}</p>
          :
          <textarea ref="textInput" placeholder="Question"></textarea>

        }
        </label>
        <div className="list">
          {
            this.renderFriends()
          }
        </div>
        <div className="padding">
            {
              this.state.friendList ?
              <button onClick={this.showQuestion} className="button button-block button-positive">
                Edit Question
              </button>
              :
              <button onClick={this.showFriends} className="button button-block button-positive">
                Next
              </button>
            }

        </div>
      </div>
    )
  }
})
