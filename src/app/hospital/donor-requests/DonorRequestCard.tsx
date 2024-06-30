'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
} from '@nextui-org/react';

import { usePathname } from 'next/navigation';

const DonorRequestCard = ({ organ, type, name, blood, age, address }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Card className='max-w-[400px]'>
      <CardHeader className='flex gap-3 justify-between'>
        <div className='flex flex-col gap-2'>
          <p className='text-md'>{organ}</p>
          {type === 'Live Donor' ? (
            <Chip color='success' variant='dot' size='md'>
              {type}
            </Chip>
          ) : (
            <Chip color='danger' variant='dot' size='md'>
              {type}
            </Chip>
          )}
        </div>
        {pathName === '/hospital/potential-donors' ? <p className='px-2 py-1 rounded-xl text-xs border border-green-500 bg-green-100'>Approved</p> : 
        <p className='px-2 py-1 rounded-xl text-xs border border-slate-500 bg-slate-100'>Pending</p>}
        
      </CardHeader>

      <Divider />
      <CardBody>
        <p>{name}</p>
        <p>
          <span className='font-semibold'>Blood Group:</span> {blood}
          <br />
          <span className='font-semibold'>Age:</span> {age}
          <br />
          <span className='font-semibold'>Address:</span>
          {address}
          <br />
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        {pathName === '/hospital/donor-requests' ? (
          <Link
            isExternal
            showAnchorIcon
            href='/hospital/donor-requests/upload-infos'
          >
            Upload Documents
          </Link>
        ) : (
          <Link
            isExternal
            showAnchorIcon
            href='/hospital/donor-requests/upload-infos'
          >
            Show Documents
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default DonorRequestCard;
