import HomeLayout from '../pages/homeLayout/HomeLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Error404 from '../pages/error404/Error404';
import PrivateRoute from './PrivateRoute';
import AdminLayout from '../admin/adminLayout/AdminLayout';
import AdminHome from '../admin/pages/home/AdminHome';
import Users from '../admin/pages/users/Users';
import AdminAbout from '../admin/pages/about/AdminAbout';
import AdminGallery from '../admin/pages/gallery/AdminGallery';
import AdminReservation from '../admin/pages/reservation/AdminReservation';

import AdminNewsLayout from '../admin/pages/news/adminNewsLayout/AdminNewsLayout';
import AdminNews from '../admin/pages/news/AdminNews';
import NewsCreate from '../admin/pages/news/newsCreate/newsCreate';
import NewsEdit from '../admin/pages/news/newsEdit/newsEdit';


import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import IcarePage from '../pages/icare/IcarePage';
import NewsPage from '../pages/news/NewsPage';
import NewsLayout from '../pages/news/newsLayout/NewsLayout';
import NewsDetail from '../pages/news/newsDetail/NewsDetail';
import Settings from '../admin/pages/setting/Settings';


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
        element: <NewsLayout />,
        children:[
          {
            index:true,
            element: <NewsPage/>
          },
          {
            path:":id",
            element: <NewsDetail/>
          }
        ]
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
        path: 'tənzimləmələr',
        element: <PrivateRoute><Settings  /></PrivateRoute>,
      },
      {
        path: 'xəbərlər',
        element: <PrivateRoute><AdminNewsLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><AdminNews/></PrivateRoute>,
          },
          {
            path:"yarat",
            element: <PrivateRoute><NewsCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><NewsEdit/></PrivateRoute>,
          },
        ]
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