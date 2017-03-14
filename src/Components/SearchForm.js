import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  // state = {
  //   searchText: ''
  // }
  
  onSearchChange = e => {
    // this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    // This line unneeded if using ref to access value directly from DOM
    // this.props.onSearch(this.state.searchText);
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search"
               // A ref allows direct access to a DOM element
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }
}