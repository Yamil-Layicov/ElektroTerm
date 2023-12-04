import { Link } from 'react-router-dom'
import './adminMenu.scss';



const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Əsas səhifə",
        url: "/admin",
        icon: "/home.svg",
      },
      {
        id: 2,
        title: "Profil",
        url: "/admin/profil",
        icon: "/user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Haqqimizda",
        url: "/admin/about",
        icon: "/form.svg",
      },
      {
        id: 2,
        title: "Tənzimləmələr",
        url: "/admin/tənzimləmələr",
        icon: "/product.svg",
      },
      {
        id: 3,
        title: "Xəbərlər",
        url: "/admin/xəbərlər",
        icon: "/order.svg",
      },
      {
        id: 4,
        title: "Sosial Şəbəkələr",
        url: "/admin/sosials",
        icon: "/post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Sliders",
        url: "/admin/slider",
        icon: "/element.svg",
      },
      // {
      //   id: 2,
      //   title: "Notes",
      //   url: "/admin",
      //   icon: "/note.svg",
      // },
      // {
      //   id: 3,
      //   title: "Forms",
      //   url: "/admin",
      //   icon: "/form.svg",
      // },
      {
        id: 4,
        title: "Calendar",
        url: "/admin",
        icon: "/calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/admin",
        icon: "/setting.svg",
      },
      // {
      //   id: 2,
      //   title: "Backups",
      //   url: "/admin",
      //   icon: "/backup.svg",
      // },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      // {
      //   id: 1,
      //   title: "Charts",
      //   url: "/admin",
      //   icon: "/chart.svg",
      // },
      {
        id: 2,
        title: "Çıxış",
        url: "/",
        icon: "/log.svg",
      },
    ],
  },
];


const AdminMenu = () => {
  return (
    <div className='menu'>
     {menu.map(item => (
       <div className="item" key={item.id}>
       <div className="title">{item.title}</div>
       {item.listItems.map(listItem => (
        <Link to={listItem.url} className='listItem' key={listItem.id}>
        <img src={listItem.icon} alt="" />
        <span className="listItemTitle">{listItem.title}</span>
      </Link>
       ))}
     </div>
     ))}
    </div>
  )
}

export default AdminMenu