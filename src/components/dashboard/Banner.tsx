import { Button } from '@/components/ui/button';

//asset import
import boltIcon from '../../assets/bolt.png';

export const Banner = () => {
  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between p-8 md:px-10 gap-1 justify-center items-center h-[196px] md:h-[128px] bg-white border-1 rounded-2xl my-4'>
      <div className='flex flex-col gap-2 justify-center md:items-start items-center'>
        <p className='font-semibold text-[26px]'>
          Calcutta Medicle College
        </p>
        <p className='text-slate-500  font-[400] text-sm text-center w-fit px-4 md:px-0'>
          Kolkata, West Bengal
        </p>
      </div>

      <div className='h-full text-sm'>
        <p>HRN - 5246e4gg42g</p>
        <p>ESTD - 1920</p>
      </div>
    </div>
  );
};
