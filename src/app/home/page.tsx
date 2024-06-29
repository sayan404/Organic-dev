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
          The complete platform for building the Web
        </h1>
        <p className='my-4 text-lg text-slate-500'>
          Give your team the toolkit to stop configuring and start innovating.
          Securely build, deploy, and scale the best web experiences.
        </p>
        <div className='flex gap-2'>
          <Button onClick={() => router.push("/donor/add")}>Donor Registration</Button>
          <Button onClick={() => router.push("/hospital/register")}>Hospital Registration</Button>
        </div>
      </section>
      <section className='flex w-[50%] justify-end items-center'>
        <div className='bg-slate-400 h-[80%] w-[80%]'>image</div>
      </section>
    </div>
  );
};

export default Home;
