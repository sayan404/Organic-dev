import { HoverEffect } from './HoverEffect';
export function CardSection() {
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <HoverEffect items={RegisteredOrgans} />
    </div>
  );
}

enum Applicationstatus {
  Approved = 'Approved',
  Pending = 'Pending',
  Denied = 'Denied',
}

export const RegisteredOrgans = [
  {
    title: 'Kidney',
    description:
      'A technology company that builds economic infrastructure for the internet.',
    date: '2024-06-15',
    status: Applicationstatus.Approved,
    link: '/hospital/search-organs/details/6',
  },
  {
    title: 'Heart',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    date: '2024-05-10',
    status: Applicationstatus.Pending,
    link: '/hospital/search-organs/details/5',
  },
  {
    title: 'Skin',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    date: '2024-03-15',
    status: Applicationstatus.Pending,
    link: '/hospital/search-organs/details/4',
  },
  {
    title: 'Kidney',
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    date: '2024-04-03',
    status: Applicationstatus.Denied,
    link: '/hospital/search-organs/details/3',
  },
  {
    title: 'Tissue',
    description:
      'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    date: '2023-11-03',
    status: Applicationstatus.Pending,
    link: '/hospital/search-organs/details/2',
  },
  {
    title: 'Bonemarro',
    description:
      'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    date: '2023-08-12',
    status: Applicationstatus.Approved,
    link: '/hospital/search-organs/details/1',
  },
];
