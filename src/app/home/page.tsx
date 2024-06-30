"use client"
import { Button } from '@/components/ui/button';
import React from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  return (
    <div className='flex flex-wrap px-8 h-[90vh]'>
      <section className='w-full md:w-[50%] h-full flex flex-col justify-center'>
        <h1 className='font-bold text-6xl'>
          Donate Your Organ<br/> Save one's life
        </h1>
        <p className='my-4 text-lg text-slate-500'>
          Revolutionizing organ donation: connecting donors and recipients seamlessly for life-saving transplants
        </p>
        <div className='flex gap-2'>
          <Button onClick={() => router.push("/donor/add")}>Donor Registration</Button>
          {/* <Button onClick={() => router.push("/hospital/register")}>Hospital Registration</Button> */}
          <Button onClick={() => router.push("/hospital/login")}>Hospital Login</Button>
         
        </div>
      </section>
      <section className='flex w-[50%] justify-end items-center'>
        <div className='bg-slate-400 h-[55%] w-[80%]'>
          <img src="./organ-donor.png" alt="donor organ" />
        </div>
      </section>
    </div>
  );
};

export default Home;
