import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ListedBooks from './components/Pages/ListedBooks/ListedBooks.jsx';
import ReadBooks from './components/Pages/ReadBooks/ReadBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "listed-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "read-books",
        element: <ReadBooks></ReadBooks>
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

