import Badge from './badge';
import Icon from './icon';

class IntroCard extends React.Component {
  
  componentWillMount() {
    this.props.baseWord = "Hello";
    this.setState({word: this.props.baseWord});
    this.timeout = null;
  }
  
  onMouseOver(word) {
     clearTimeout(this.timeout);
     this.setState({word: word});
  }
  
  onMouseOut() {
    
    // Don't leave, if they enter a different active state quickly.
    this.timeout = setTimeout(function() {
		  this.setState({word: this.props.baseWord});      
    }.bind(this), 10);
  }

  render() {
    return (<div className="card">
      <Badge word={this.state.word} />
			<h1>I'm Jessie Jones</h1>
      <p>Developer and maker, find me on:</p>
      <p>
        <Icon name="github" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        <Icon name="codePen" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
        <Icon name="twitter" onMouseOverEvent={this.onMouseOver.bind(this)} onMouseOutEvent={this.onMouseOut.bind(this)}/>
       </p>
    </div>)
  }

};

export default IntroCard;