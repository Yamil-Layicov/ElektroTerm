import HomeLayout from '../pages/homeLayout/HomeLayout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Error404 from '../pages/error404/Error404'
import PrivateRoute from './PrivateRoute'
import AdminLayout from '../admin/adminLayout/AdminLayout'
import AdminHome from '../admin/pages/home/AdminHome'
import Users from '../admin/pages/users/Users'
import AdminAbout from '../admin/pages/about/AdminAbout'
import AdminFooter from '../admin/pages/footer/AdminFooter'
import AdminGallery from '../admin/pages/gallery/AdminGallery'
import AdminReservation from '../admin/pages/reservation/AdminReservation'
import AdminMenuPage from '../admin/pages/menu/AdminMenuPage'


import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import IcarePage from '../pages/icare/IcarePage'
import NewsPage from '../pages/news/NewsPage'


const routes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'əlaqə',
        element: <ContactPage/>,
      },
      {
        path: 'İcarə',
        element: <IcarePage />,
      },
      {
        path: 'haqqımızda',
        element: <AboutPage/>,
      },
      {
        path: 'xəbərlər',
        element: <NewsPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error404/>,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <PrivateRoute><AdminHome /></PrivateRoute>,
      },
      {
        path: 'profil',
        element: <PrivateRoute><Users/></PrivateRoute>,
      },
      {
        path: 'about',
        element: <PrivateRoute><AdminAbout /></PrivateRoute>,
      },
      {
        path: 'footer',
        element: <PrivateRoute><AdminFooter /></PrivateRoute>,
      },
      {
        path: 'menu',
        element: <PrivateRoute><AdminMenuPage /></PrivateRoute>,
      },
      {
        path: 'gallery',
        element: <PrivateRoute><AdminGallery/></PrivateRoute>,
      },
      {
        path: 'reservation',
        element: <PrivateRoute><AdminReservation/></PrivateRoute>,
      },
    ],
  },

];

export default routes;