'use client';
import { FunnelIcon } from '@heroicons/react/16/solid';
import { Divider } from '@nextui-org/react';
import { Button } from '@/components/ui/button';
import { CardSection } from './CardSection';
const SearchOrgans = () => {
  return (
    <main>
      <div className='mx-[100px] my-[40px]'>
        <div className='flex justify-between'>
          <div className='text-4xl mb-8 font-semibold'>Search Organs</div>
        </div>
        <Divider />
        {/* search btn */}
        <div className='flex justify-center my-4'>
          <Button className='text-xl p-6'>Registration Form</Button>
        </div>
        <div className='flex justify-between'>
          <div className='text-4xl mb-8 font-semibold'>All Registrations</div>
        </div>
        <Divider />
        <div className='flex flex-wrap gap-4 mt-8'>
          <CardSection/>
        </div>
      </div>
    </main>
  );
};

export default SearchOrgans;
