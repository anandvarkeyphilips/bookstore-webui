import { Link } from "react-router-dom";

export default function BookTableView({books}){

    return(<table className='table table-bordered table-striped'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Page Count</th>
                <th>Year</th>
                <th>Language</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book) => {
                return (
                    <tr key={book.id}>
                        <td>
                            <Link to={`/detail/${book.id}`}> {book.title} </Link>
                        </td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.pageCount}</td>
                        <td>{book.year}</td>
                        <td>{book.language}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>);
};