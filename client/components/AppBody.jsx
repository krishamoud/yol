let Transition = React.addons.CSSTransitionGroup;
AppBody = React.createClass({
  getDefaultProps() {
    return {
      tabs: ["Ask a Question!"]
    }
  },
  getInitialState() {
    return {
      modal: false
    }
  },
  ionModal(tab) {
    this.setState({
      modal: (
        <IonModal>
          <div className="h1 title">{tab}</div>
          <button onClick={ () => this.setState({modal:false}) } className="button button-icon active">
            <i className="icon ion-ios-close-empty"></i>
          </button>
        </IonModal>
      )
    })
  },
  validRoute(){
    const currentRoute = FlowRouter.current().route.path;
    const qRoutes = ['/', '/settings', '/other'];
    return qRoutes.indexOf(currentRoute) > -1;
  },
  render() {
    return (
      <div className="ionic-body">
        {this.state.modal ? <Backdrop /> : false}
        <Transition transitionName="modal">
          {this.state.modal}
        </Transition>
        <div className="bar bar-header bar-light">
          <a href="/settings" className="button button-icon icon ion-gear-a"></a>
          <a href="/" className="h1 title" >YoNApp</a>
          <a href="/other" className="button button-icon icon ion-heart"></a>
        </div>

        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              {this.props.content}
            </div>
          </div>
        </div>
        {
          this.validRoute() ?
          <div className="tabs tabs-icon-top">
            {
              this.props.tabs.map((tab, i) => {
                return (
                  <a className="tab-item" key={tab} onClick={this.ionModal.bind(null, tab)}>
                    <i className="icon ion-star"></i>
                    {tab}
                  </a>
                )
              })
            }
          </div> :
          null
        }
      </div>
    )
  }
})
