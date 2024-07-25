import { Link } from "react-router-dom"

export default function BookCardView({books}) {
    return (
        <div className='row'>
            {books.map((book) => {
                return (
                    <div className='col-3' key={book.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{book.title}</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>{book.author}</h6>
                                <p className='card-text'>
                                    Page Count: {book.pageCount}<br/>
                                    Year: {book.year}<br/>
                                    Language: {book.language}
                                </p>
                                <Link >Details</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}