import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';
import themeSelectors from '../../redux/theme/themeSelectors';
import themeSlice from '../../redux/theme/themeSlice';

class SwitchOne extends Component {
  state = { checked: true };

  componentDidMount() {
    const parsedTheme = JSON.parse(localStorage.getItem('persist:root'));
    if (parsedTheme !== null) {
      JSON.parse(parsedTheme.theme).currentTheme === 'light'
        ? this.setState({ checked: true })
        : this.setState({ checked: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    prevState.checked !== this.state.checked && this.props.toggleTheme();
  }

  handleChange = () => {
    this.setState((state) =>
      state.checked ? { checked: false } : { checked: true }
    );
  };

  render() {
    return (
      <Switch
        className="switch"
        checked={this.state.checked}
        onChange={this.handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    );
  }
}

const mapStateToProps = (state, props) => ({
  theme: themeSelectors.getCurrentTheme(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(themeSlice.actions.switchTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchOne);
