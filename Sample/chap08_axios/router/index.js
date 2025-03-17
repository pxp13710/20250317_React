import { createBrowserRouter } from 'react-router-dom'

import App from './../App'
import Axios from './../pages/Axios'
import Home from './../pages/Home'
import ContactList from './../pages/ContactList'
import Contact from './../pages/Contact'
import AddContact from './../pages/AddContact'
import UpdateContact from './../pages/UpdateContact'
import ErrorElem from './../pages/ErrorElem'
import NotFound from './../pages/NotFound'

const routes = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <ErrorElem />, children: [
      { index: true, element: <Home /> },
      { path: '/axios', element: <Axios /> },

      { path: '/contactList', element: <ContactList /> },
      { path: '/contact/:no', element: <Contact /> },
      { path: '/addContact', element: <AddContact /> },
      { path: '/updateContact/:no', element: <UpdateContact /> },

      { path: '*', element: <NotFound /> },
    ]
  }
])
export default routes;
