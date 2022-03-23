import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { useParams } from 'react-router-dom';
import { getBookById } from '../../services/books';
import { NavLink } from 'react-router-dom';

function BookDetail() {
  const params = useParams();

  const id = params.id; // TODO: Use id from route
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <>
      <NavLink className="navlink" exact to="/books">
        Books!!!
      </NavLink>
      <Book book={book} showDetail />

      <div></div>
    </>
  );
}

export default BookDetail;
