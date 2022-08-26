// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Inicio",
  },
  {
    icon: UilClipboardAlt,
    heading: "Ordenes",
  },
  {
    icon: UilUsersAlt,
    heading: "Clientes",
  },
  {
    icon: UilPackage,
    heading: 'Productos'
  },
  {
    icon: UilChart,
    heading: 'Estadisticas'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Ventas",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "1.459.970",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventas",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Ingresos",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "5.290.270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Ingresos",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Gastos",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "2.739.270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Gastos",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Julian ",
    noti: "Ha ordenado un plan de gym ORO",
    time: "1 min ago",
  },
  {
    img: img2,
    name: "Sebastián Perez",
    noti: "Ha comprado proteinas y plan de alimentación",
    time: "30 min ago",
  },
  {
    img: img3,
    name: "Pepita perez",
    noti: "Ha ordenado un plan basico de gym",
    time: "2 hours ago",
  },
];
