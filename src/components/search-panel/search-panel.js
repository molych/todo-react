import React, {Component} from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {
  state = {
    tern: '',
  };
  onSearchChange = e => {
    const tern = e.target.value;
    this.setState({tern});
    this.props.onSearchChange(tern);
  };

  render() {
    const searchText = 'Type here to search';
    return (
      <div className="search-panel">
        <input
          type="text"
          className="search-input"
          placeholder={searchText}
          value={this.state.tern}
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}
