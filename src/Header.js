import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Search from './Search'
class Header extends Component {

    render(){
        return (
            <div>
                <div className='nav'>
                    <Link 
                        className='logo'
                        to='/'
                    >
                        React Demo App
                    </Link>
                    
                    <Search
                        filter={this.props.filter} 
                        filterSearch={this.props.filterSearch}
                    />
                </div>
            </div>
        )
    }
}
export default Header