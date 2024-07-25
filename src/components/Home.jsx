import { useEffect, useState } from "react";
//import books from '../data/books';
import BookCardView from "./partials/BookCardView";
import BookTableView from "./partials/BookTableView";
import axios from "axios";

export default function Home() {
  // console.log(books);

  const [viewType, setViewType] = useState("table");
  const [books, setBooks] = useState([]);

  const viewSwitchHandler = (e) => {
    if (e.target.checked) {
      setViewType("card");
    } else {
      setViewType("table");
    }
  };

  useEffect(() => {
    // fetch("http://localhost:5000/books")
    //   .then((res) => res.json())
    //   .then((data) => setBooks(data))
    //   .catch((reason) => console.error(reason));

    axios.get("http://localhost:5000/books")
      .then((res) => setBooks(res.data))
      .catch((reason) => console.error(reason));
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              onChange={viewSwitchHandler}
              role="switch"
              id="viewType"
            />
            <label class="form-check-label">Card View</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>List of Books</h2>
          {viewType === "table" ? (
            <BookTableView books={books} />
          ) : (
            <BookCardView books={books} />
          )}
        </div>
      </div>
    </div>
  );
}
