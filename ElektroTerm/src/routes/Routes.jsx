import HomeLayout from '../pages/homeLayout/HomeLayout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Error404 from '../pages/error404/Error404';
import PrivateRoute from './PrivateRoute';
import AdminLayout from '../admin/adminLayout/AdminLayout';
import AdminHome from '../admin/pages/home/AdminHome';
import AdminAbout from '../admin/pages/about/AdminAbout';
import AdminRent from '../admin/pages/rent/AdminRent';


import AdminNewsLayout from '../admin/pages/news/adminNewsLayout/AdminNewsLayout';
import AdminNews from '../admin/pages/news/AdminNews';
import NewsCreate from '../admin/pages/news/newsCreate/newsCreate';
import NewsEdit from '../admin/pages/news/newsEdit/newsEdit';

import SocialLayout from '../admin/pages/socials/socialLayout/SocialLayout';
import Socials from '../admin/pages/socials/Socials';
import SocialCreate from '../admin/pages/socials/socialCreate/SocialCreate';
import SocialEdit from '../admin/pages/socials/socialEdit/SocialEdit';

import AdminSliderLayout from '../admin/pages/slider/adminSliderLayout/AdminSliderLayout';
import AdminSlider from '../admin/pages/slider/AdminSlider';
import SliderCreate from '../admin/pages/slider/sliderCreate/SliderCreate';
import SliderEdit from '../admin/pages/slider/sliderEdit/SliderEdit';


import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import IcarePage from '../pages/icare/IcarePage';
import NewsPage from '../pages/news/NewsPage';
import NewsLayout from '../pages/news/newsLayout/NewsLayout';
import NewsDetail from '../pages/news/newsDetail/NewsDetail';
import Settings from '../admin/pages/setting/Settings';
import Profil from '../admin/pages/profil/Profil';
import ChangePassword from '../admin/pages/changePassword/ChangePassword';


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
        path: 'rent',
        element: <PrivateRoute><AdminRent/></PrivateRoute>,
      },
      {
        path: 'profil',
        element: <PrivateRoute><Profil/></PrivateRoute>,
      },
      {
        path: 'edit-password',
        element: <PrivateRoute><ChangePassword/></PrivateRoute>,
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
        path: 'sosials',
        element: <PrivateRoute><SocialLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><Socials/></PrivateRoute>,
          },
          {
            path:"yarat",
            element: <PrivateRoute><SocialCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><SocialEdit/></PrivateRoute>,
          },
        ]
      },
      {
        path: 'slider',
        element: <PrivateRoute><AdminSliderLayout/></PrivateRoute>,
        children:[
          {
            index:true,
            element: <PrivateRoute><AdminSlider/></PrivateRoute>,
          },
          {
            path:"yarat",
            element: <PrivateRoute><SliderCreate/></PrivateRoute>,
          },
          {
            path:":id",
            element: <PrivateRoute><SliderEdit/></PrivateRoute>,
          },
        ]
      },
     
    ],
  },

];

export default routes;