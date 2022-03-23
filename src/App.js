import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import LandingPage from './views/Books/LandingPage/LandingPage';
import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
