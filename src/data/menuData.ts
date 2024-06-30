//asset import
import stats from '../assets/stats.png';
import emailIcon from '../assets/email.png';
import userIcon from '../assets/user.png';

export const menuData = [
  {
    section_title: 'DASHBOARD',
    section_items: [
      {
        link_logo: stats,
        link_title: 'Dashboard',
        sub_links: ['Overview'],
      },
      {
        link_logo: emailIcon,
        link_title: 'Donor',
        sub_links: [
          {
            name: 'Applied Donors',
            navLink: '/hospital/donor-requests',
          },
          {
            name: 'Potential Donors',
            navLink: '/hospital/potential-donors',
          },
        ],
      },
      {
        link_logo: userIcon,
        link_title: 'Organ Transplant',
        sub_links: [
          {
            name: 'Search Organ',
            navLink: '/hospital/search-organs',
          },
        ],
      },
    
    ],
  },
];
