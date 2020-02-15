import React, { Component } from 'react';

export default class search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        let val = e.target.value
        this.setState({ search: val })
        this.props.getSearchResult(val)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.apiCall(this.state.seach)
    }


  render() {

    
    return (
      <div style={{textAlign: 'center', marginTop: '10%', width: '50%'}}> 

        <form>
            <input name='search'  type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search for your fav book"></input>
            <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
        </form>
    
      </div>
    );
  }
}
