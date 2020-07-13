import React, { Component } from 'react'

import Shelf from './Shelf'

class Shelves extends Component {

    filterBooksByStatus = (FILTER_BY) => {
        return this.props.books.filter(
            (book) => {
                return book.status === FILTER_BY
            }
        )

    }
    render(){



        return (
            <div>
                <Shelf 
                    status='current'
                    books={this.filterBooksByStatus('current')}
                    action={this.props.changeStatus}
                />
                <Shelf 
                    status='future'
                    books={this.filterBooksByStatus('future')}
                    action={this.props.changeStatus}
                />
                <Shelf 
                    status='read'
                    books={this.filterBooksByStatus('read')}
                    action={this.props.changeStatus}
                />
            </div>
        )
    }
}
export default Shelves