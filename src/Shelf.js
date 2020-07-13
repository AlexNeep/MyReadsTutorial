import React, { Component } from 'react'


import Options from './Options'

class Shelf extends Component {


    state={
        status:this.props.status
    }

    render (){

        const shelf_names= ['none','Reading List', 'Wishlist', 'Already Read']
        const book_statuses=['none','current','future','read']
        return(
        <div>
            <div className='shelf-name'>
                {this.state.status === book_statuses[1] ? shelf_names[1]:''}
                {this.state.status === book_statuses[2] ? shelf_names[2]:''}
                {this.state.status === book_statuses[3] ? shelf_names[3]:''}
            </div>
            <ul className ='bookshelf'>
                    {this.props.books.map(
                        (book) => (

                            <li key ={book.id} >
                                {/* <div
                                    className='cover'
                                    style={{
                                        backgroundImage=`url(${book.image})`
                                    }}
                                />*/}
                                <div className="title">
                                    {book.title}
                                </div>
                                <div className='author'>
                                    {book.author}
                                </div>

                                <select
                                    className='change-shelf'
                                    onChange={(event) => this.props.action(book,event.target.value)}
                                    value={book.status}
                                > 

                                    <Options value= {book_statuses[0]} name={shelf_names[0]} />
                                    <Options value= {book_statuses[1]} name={shelf_names[1]} />
                                    <Options value= {book_statuses[2]} name={shelf_names[2]} />
                                    <Options value= {book_statuses[3]} name={shelf_names[3]} />

                                </select>
                            </li>
                        )
                    )}
                </ul>
        </div>
        )
    }
}
export default Shelf