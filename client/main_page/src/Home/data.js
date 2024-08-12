import React from "react";
import {
  FaChartBar,
  FaHubspot,
  FaCalendarCheck,
  FaGoogle,
  FaSignInAlt,
} from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/gallery",
    text: "gallery",
  },
  {
    id: 3,
    url: "/events",
    text: "events",
  },
  {
    id: 4,
    url: "/servicefront",
    text: "Services",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
  },
  {
    id: 6,
    url: "/reservations",
    text: "reservations",
  },

  {
    id: 7,
    url: "/login",
    text: <FaSignInAlt />,
  },
];

const team = [
  {
    id: 1,
    name: "Aman Shakya",
    job: "Assistant Professor",
    image:
      "https://lh3.googleusercontent.com/XvHQZZs_g2GfL71kWftqtLU7NKTmyIYHYQQYXRrG80KnFiGSfCih9H_LUzxCpd1_yo0ZwrcwXSkl5-dV_IUeGzuDa2CecARGBAAOyKojPSgImn-IP6GLgXPx9O0OKoyIXg=w1280",
  },
  {
    id: 2,
    name: "Sanjeeb Prasad Pandey",
    job: "Assosciate Professor",
    image:
      "https://media.licdn.com/dms/image/C5603AQEHnLn8CFWwlw/profile-displayphoto-shrink_400_400/0/1598930796444?e=1729123200&v=beta&t=_7tK9Oz_S0ZaMzNtr1978lCe46kNE5CIBpX5hP_Ari0",
  },
  {
    id: 3,
    name: "Basanta Joshi",
    job: "Assistant Professor",
    image:
      "https://media.licdn.com/dms/image/C5603AQHnJG1u91tJeQ/profile-displayphoto-shrink_400_400/0/1516342059232?e=1729123200&v=beta&t=rqgYQ_2UMYCqI1UdkbzfofzCMD45lI1VNr1ZWM5wtUk",
  },
  {
    id: 4,
    name: "Sharad Kumar Ghimire",
    job: "Assosciate Professor",
    image:
      "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=n32raPwAAAAJ&citpid=1",
  },
];
export const services = [
  {
    id: 1,
    title: "Training",
    icon: <FaChartBar />,
    text: "ICTC conducts both long term and short-term training courses related with current ICT trends",
  },
  {
    id: 2,
    title: "Laboratories",
    icon: <FaHubspot />,
    text: "laborICTC has 9 Laboratories, with 30 computers in each lab for exam conduction, trainings and ICT-related lab purposes.atories",
  },
  {
    id: 3,
    title: "Reservations",
    icon: <FaCalendarCheck />,
    text: "Give us a call, or make reservations for any ICT related examinations, workshops or seminars. ",
  },
];
export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.google.com",
    icon: <FaGoogle />,
  },
];

export default team;
