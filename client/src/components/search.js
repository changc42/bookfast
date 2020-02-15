import React, { Component } from 'react';

export default class search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    handleChange = e => {
        let val = e.target.value
        this.setState({ search: val })
        this.props.getSearchResult(val)
    }


  render() {

    
    return (
      <div style={{textAlign: 'center', marginTop: '10%', width: '50%'}}> 

        <input name='search'  type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search for your fav book"></input>
    
      </div>
    );
  }
}
