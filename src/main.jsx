import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Components/Body.jsx'
import Books from './Components/Books.jsx'
import BookInfo from './Components/BookInfo.jsx'
import AddBook from './Components/AddBook.jsx'
import appStore from './Utils/appStore.jsx'
import { Provider } from 'react-redux'
import NotFound from './Components/NotFound.jsx'
import HomeBookList from './Components/HomeBookList.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />
  },
  {
    path: "/HomeBookList/:id",
    element: <HomeBookList />
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/books/:category",
    element: <Books />
  },
  {
    path: "/AddBook",
    element: <AddBook />
  },
  {
    path: "/books/info/:id",
    element: <BookInfo />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
  <RouterProvider router={router} />
  </Provider>
);
