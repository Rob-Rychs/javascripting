const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Badge extends React.Component {

  render() {
    var word = this.props.word;
    var wordElement = (<h1 key={word}>{word}</h1>);
    return (<div className="badge">
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>  
  			  {wordElement}
        </ReactCSSTransitionGroup>
    </div>)
  }

};

export default Badge;