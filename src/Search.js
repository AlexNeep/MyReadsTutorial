import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Search extends Component{


    render(){
        return(
            <div className='search'>
                <input 
                    type='text'
                    value={this.props.filter} 
                    onChange={(event) => this.props.filterSearch(event.target.value)}
                    placeholder='Search by Title or Author'
                />
                <Link 
                    className='search-button'
                    to='search'
                >
                    Search
                </Link>
            </div>
        )
    }
}
export default Search