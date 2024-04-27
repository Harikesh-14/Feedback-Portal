import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

export const links1 = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Reviews',
    path: '/reviews',
  },
  {
    id: 3,
    title: 'About',
    path: '/about',
  },
  {
    id: 4,
    title: 'Contact',
    path: '/contact',
  },
] as const;

export const links2 = [
  {
    id: 1,
    title: 'Instagram',
    path: 'https://www.instagram.com/harikeshranjansinha',
    icons: React.createElement(BsInstagram),
  },
  {
    id: 2,
    title: 'Twitter',
    path: 'https://twitter.com/sinha_harikesh',
    icons: React.createElement(BsTwitterX),
  },
  {
    id: 3,
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/harikeshranjansinha',
    icons: React.createElement(BsLinkedin),
  },
  {
    id: 4,
    title: 'GitHub',
    path: 'https://github.com/Harikesh-14',
    icons: React.createElement(BsGithub),
  }
] as const;