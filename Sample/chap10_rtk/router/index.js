import { createBrowserRouter } from 'react-router-dom'

import App from './../App'
import Count from './../pages/Count'
import TodoList from './../pages/TodoList'

import ContactList from './../pages/ContactList'
import Contact from './../pages/Contact'
import AddContact from './../pages/AddContact'
import UpdateContact from './../pages/UpdateContact'
import ErrorElem from './../pages/ErrorElem'
import NotFound from './../pages/NotFound'

const routes = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <ErrorElem />, children: [
      { index: true, element: <h3>INDEX</h3> },
      { path: '/count', element: <Count /> },
      { path: '/todoList', element: <TodoList /> },

      { path: '/contactList', element: <ContactList /> },
      { path: '/contact/:no', element: <Contact /> },
      { path: '/addContact', element: <AddContact /> },
      { path: '/updateContact', element: <UpdateContact /> },

      { path: '*', element: <NotFound /> },
    ]
  }
])
export default routes;
