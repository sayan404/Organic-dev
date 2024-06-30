"use client"

import { Topbar } from '@/src/components/dashboard/Topbar';
import { Body } from '@/src/components/dashboard/Body';
import { Sidebar } from '@/src/components/dashboard/Sidebar';
const Dashboard = () => {
  return (
    <>
      <div className='md:bg-[#F2F4F7] flex'>
        <div className='w-[20%] h-screen hidden md:flex'>
          <Sidebar />
        </div>
        <div className='w-full md:w-[80%]'>
          {/* <Topbar /> */}
          <Body />
        </div>
      </div>
    </>
  );
};

export default Dashboard;