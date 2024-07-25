import { useEffect, useState } from 'react';
import BookCardView from './partials/BookCardView';
import BookTableView from './partials/BookTableView';
import axios from 'axios';
 
export default function Home() {
    const [viewType, setViewType] = useState('table');
    const [books, setBooks] = useState([]); // full list of books
    const [filteredBooks, setFilteredBooks] = useState([]); // filtered list of books
    const [searchText, setSearchText] = useState('');
 
    const viewSwitchHandler = (e)=> {
        if(e.target.checked) {
            setViewType('card');
        } else {
            setViewType('table');
        }
    }
 
    const searchHandler = (e)=> {
        setSearchText(e.target.value);
        let temp = books.filter(book => (book.title.toLowerCase().includes(e.target.value.toLowerCase()) 
        || book.author.toLowerCase().includes(e.target.value.toLowerCase())));
        setFilteredBooks(temp);
    }  
   
    useEffect(()=>{
        // fetch('http://localhost:5000/books')
        //     .then(res => res.json())
        //     .then(data => setBooks(data))
        //     .catch(error => console.error(error));
 
        axios.get('http://localhost:5000/books')
            .then(res => setBooks(res.data))
            .catch(error => console.error(error));
    },[])
 
    useEffect(()=>{
        setFilteredBooks(books);
    },[books])
 
    return (
        <div className='container'>
            <div className='row alert alert-info mt-2'>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <div className="form-check form-switch">                        
                        <input className="form-check-input" type="checkbox" onChange={viewSwitchHandler} role="switch" id="viewType" />
                        <label className="form-check-label" >Card View</label>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <input type='text' value={searchText} onChange={searchHandler} className='form-control' placeholder='Search Books or Author' />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h2>List of Books</h2>
                    { viewType === 'table' ? <BookTableView books={filteredBooks} /> : <BookCardView books={filteredBooks} /> }
                </div>
            </div>
        </div>
    )
}