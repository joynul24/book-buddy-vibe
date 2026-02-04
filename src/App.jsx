import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ListedBooks from './components/Pages/ListedBooks/ListedBooks.jsx';
import ReadBooks from './components/Pages/ReadBooks/ReadBooks.jsx';
import Home from './components/Pages/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch("/booksData.json")
      },
      {
        path: "read-books",
        element: <ReadBooks></ReadBooks>
      },
      {
        path: "bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch("/booksData.json")
      }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

