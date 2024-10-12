/* eslint-disable react/prop-types */
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchgroups } from '../app/store/slices/FirstViewSlice'
import Row from '../app/components/Row/Row';
import Cookies from 'js-cookie';

class FirstView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount () {
    //this.props.fetchgroups();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('State Changed');
    }
  }

  componentWillUnmount () {}

  increaseCount(newValue) {
    Cookies.set('Count', newValue);
    this.setState({ count: newValue });
  }

  notifier = () => {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        const notification = new Notification('Notifier', {
          title: 'Notifier',
          body: `This is a Notifier`,
        });

        notification.onclick = () => {
          // On Click Notifier action
        };
      }
    });
  }

  renderRows() {
    const { count } = this.state;
    const arrayOfRows = [];
    for (let i = 0; i < count; i++) {
      arrayOfRows.push(<Row id={i} key={i} />);
    }
    return arrayOfRows;
  }

  render() {
    return (
      <>
        <div>
          <p>Environment: {import.meta.env.VITE_ENV}</p>
          {this.renderRows()}
          <div
            style={{ height: '100px', width: '100px', background: 'yellow', cursor: 'pointer' }}
            onClick={() => {
              this.notifier()
              this.increaseCount(this.state.count + 1);
            }}
          >
            Click Me
          </div>

          <button
            onClick={() => {
              window.location.replace('/secondview')

            }}
          >
            Go to Second view
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.firstView.groups,
});

const mapDispatchToProps = {
  fetchgroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstView);
