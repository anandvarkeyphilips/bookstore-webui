import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Detail() {
    const params = useParams();
    const bookId = params.id;
    //const[bookId,setBookId] = useState(params.id);
    const[book,setBook] = useState(params)

    useEffect(()=> {
        axios.get(`http://localhost:5000/books/${bookId}`)
        .then(res => setBook(res.data))
        .catch(error => console.error(error));

    },[bookId])
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4>Selected item is : {bookId} </h4>
                    {book && <h4>Selected Book is : {book.title} </h4>}
                </div>
            </div>
        </div>
    )
}