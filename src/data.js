import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'

export const navLinks = [
    { id: 1, href: '#home', text: 'Home' },
    { id: 2, href: '#about', text: 'About' },
    { id: 3, href: '#services', text: 'Services' },
    { id: 4, href: '#tours', text: 'Tours' },
]

export const socialLinks = [
    { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
    { id: 2, href: "https://www.instagram.com", icon: "fab fa-facebook" },
    { id: 3, href: "https://www.facebook.com", icon: "fab fa-squarespace" },
]

export const services = [
    {
        id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
    },
    { id: 2, icon: 'fas fa-tree fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
    { id: 3, icon: 'fas fa-socks fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
]

export const tours = [
    {
        id: 1,
        img: img1,
        date: "august 26th, 2020",
        title: "Tibet Adventure", info: "Lorem ipsum dolor sit amet, consectetur empore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: 'china',
        duration: 6,
        cost: 2100
    },
    {
        id: 2,
        img: img2,
        date: "august 24th, 2020",
        title: "best of java", info: "Lorem ipsum dolor sit amet, consectetur adipisicing ele tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.", location: 'china',
        duration: 8,
        cost: 2000
    },
    {
        id: 3,
        img: img3,
        date: "august 06th, 2021",
        title: "explore hong kong", info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumqu exercitationem fugit, qui corporis.", location: 'china',
        duration: 6,
        cost: 1500
    },
    {
        id: 4,
        img: img4,
        date: "april 13th, 2019",
        title: "kenya highlights", info: "Lorsum dolor sit amet, consectetur adipisicing elit.Cumque vxercitationem fugit, qui corporis.", location: 'china',
        duration: 6,
        cost: 8500
    },
]
