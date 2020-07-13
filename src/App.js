import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import './App.css';
import * as BooksAPI from './BooksAPI'

import Header from './Header'
import Shelves from './Shelves'
import Shelf from './Shelf';

class App extends Component {

  state={
    books:[],
    filter:''
  }

componentDidMount(){
  this.setState(
    () =>(
        {
          books:[
          {
            title: 'Alice in Wonderland',
            image:'',
            author:'A',
            id:1,
            status:'current'
          },
          {
            title: 'R&J',
            image:'',
            author:'A',
            id:5,
            status:'current'
          },
          {
            title: 'Sherlock',
            image:'',
            author:'B',
            id:2,
            status:'future'
          },
          {
            title: 'The Great Gatsby',
            image:'',
            author:'C',
            id:3,
            status:'read'
          },
          {
            title: 'Macbeth',
            image:'',
            author:'D',
            id:4,
            status:'future'
          },
          {
            title: 'The Great Escape',
            image:'',
            author:'A',
            id:6,
            status:'none'
          },
          {
            title: 'Of Mice & Men',
            image:'',
            author:'A',
            id:7,
            status:'none'
          },
          {
            title: 'The Secret Barrister',
            image:'',
            author:'B',
            id:8,
            status:'none'
          },
          {
            title: 'Der Regler',
            image:'',
            author:'C',
            id:9,
            status:'none'
          },
          {
            title: 'Hamlet',
            image:'',
            author:'D',
            id:10,
            status:'none'
          }
        ]
      }  
    )
  )
  // console.log(BooksAPI.search('cook'))
}
  changeStatus = (book,status) => {
    this.removeBook(book)
    this.addBook(book,status)
  }

  removeBook = (remove_book) => {
    this.setState( (prevState) => ({
        books: prevState.books.filter(
          (book) => {
            return book.id !== remove_book.id
          }
        )
      }
    ))
  }

  addBook = (book,status) => {

    book.status=status

    this.setState( (prevState) => ({books:prevState.books.concat(book)})
    )
  }


  
  updateFilter = (query) => {
    this.setState(() => (
      {
        filter:query
      }
    ))
  }

  filteredBooks = () => {
    return this.state.books.filter((book) => (
      book.title.toLowerCase().includes(this.state.filter.toLowerCase())
    ))
  }

  render() {

    return (
      <div className='background'>
        <Route
          exact path='/'
          render={() =>(
            <div>
              <Header
                filter={this.state.filter}
                filterSearch={this.updateFilter}
              />
              <Shelves 
                books={this.filteredBooks()}
                changeStatus={this.changeStatus}
                filter={this.state.filter}
              />
              <div className='add-new-books-div'>
                <Link
                  to='search'
                  className='add-new-books'
                >
                  Find new Books
                </Link>
              </div>
              
  
            </div>
          )}
        />
        <Route
          path='/search'
          render ={() =>(
            <div className='background'>
              <Header
                filter={this.state.filter}
                filterSearch={this.updateFilter}
              />
              <Shelf
                status='none'
                books={this.filteredBooks().filter((book) => {return book.status === 'none'})}
                action={this.changeStatus}
              />
            </div>
          )}
        />
      </div>
    )
  }
}

export default App;
