AppBody = React.createClass({
  render() {
    return (
      <div className="ionic-body">
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
      </div>
    )
  }
})
