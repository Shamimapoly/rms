import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx';
import SimpleLoging from './pages/SimpleLoging.jsx';
import SimpleLogout from './pages/SimpleLogout.jsx';
import SimpleProfile from './pages/SimpleProfile.jsx';
import Simple from './pages/simple.jsx';
import Products from './pages/Products.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      { path: 'simple', element: <Simple /> },
      { path: 'simplelogin', element: <SimpleLoging /> },
      { path: 'simplelogout', element: <SimpleLogout /> },
      { path: 'simpleprofile', element: <SimpleProfile /> },
      { path: 'products', element: <Products /> },
    ],
  },
])
