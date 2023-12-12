import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './home/Home';
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import ContactMe from './pages/ContactMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutMe",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/myProjects",
        element: <MyProjects></MyProjects>,
      },
      {
        path: "/contactMe",
        element: <ContactMe></ContactMe>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
