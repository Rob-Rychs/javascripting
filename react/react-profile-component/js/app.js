import IntroCard from './components/intro-card';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <IntroCard />
    	</div>)
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);