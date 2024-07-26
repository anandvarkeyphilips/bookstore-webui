import axios from "axios";
import { Toast } from "bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "Unknown",
    pageCount: 0,
    year: 2024,
    language: "",
  });

  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let bookObj = {
      ...book,
      pageCount: parseInt(book.pageCount),
      year: parseInt(book.year),
    };
    axios
      .post("http://localhost:5000/books", bookObj)
      .then((Response) => {
        console.log(Response.data);
        setBook({
          title: "",
          author: "Unknown",
          pageCount: 0,
          year: 2024,
          language: "",
        });
        //navigate("/");
        let toastEl = document.getElementById("liveToast");
        let toast = new Toast(toastEl, { autohide: true, delay: 3000 });
        toast.show();
      })
      .catch((error) => {
        alert(error);
      });
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4">
          <h1>Add New Book</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={book.title}
                onChange={changeHandler}
                className="form-control"
                id="title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={book.author}
                onChange={changeHandler}
                className="form-control"
                id="author"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pageCount" className="form-label">
                Page Count
              </label>
              <input
                type="number"
                name="pageCount"
                value={book.pageCount}
                onChange={changeHandler}
                className="form-control"
                id="pageCount"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="number"
                name="year"
                value={book.year}
                onChange={changeHandler}
                className="form-control"
                id="year"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="language" className="form-label">
                Language
              </label>
              <input
                type="text"
                name="language"
                value={book.language}
                onChange={changeHandler}
                className="form-control"
                id="language"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          id="liveToast"
          className="toast hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            {/* <img src="..." className="rounded me-2" alt="..." /> */}
            <strong className="me-auto">Bookstore</strong>
            {/* <small>11 mins ago</small> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">New book has been added successfully</div>
        </div>
      </div>
    </div>
  );
}
