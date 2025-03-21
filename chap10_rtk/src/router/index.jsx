import { createBrowserRouter } from 'react-router-dom'

import App from './../App.jsx'
import Count from './../pages/Count.jsx'
import TodoList from './../pages/TodoList.jsx'

import ContactList from './../pages/ContactList.jsx'
import Contact from './../pages/Contact.jsx'
import AddContact from './../pages/AddContact.jsx'
import UpdateContact from './../pages/UpdateContact.jsx'
import ErrorElem from './../pages/ErrorElem.jsx'
import NotFound from './../pages/NotFound.jsx'

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
