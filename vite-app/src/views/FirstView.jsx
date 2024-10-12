import { Component } from 'react';
import Row from '../app/components/Row/Row';

class FirstView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount () {

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('State Changed');
    }
  }

  componentWillUnmount () {
    
  }

  increaseCount(newValue) {
    this.setState({ count: newValue });
  }

  renderRows() {
    const arrayOfRows = [];
    for (let i = 0; i < this.state.count; i++) {
      arrayOfRows.push(<Row id={i} key={i} />);
    }
    return arrayOfRows;
  }

  render() {
    return (
      <>
        <div>
          {this.renderRows()}
          <div
            style={{ height: '100px', width: '100px', background: 'yellow', cursor: 'pointer' }}
            onClick={() => this.increaseCount(this.state.count + 1)}
          >
            Click Me
          </div>

          <button
            onClick={() => {
              window.location.pathname = '/secondview';
            }}
          >
            Go to Second view
          </button>
        </div>
      </>
    );
  }
}

export default FirstView;
