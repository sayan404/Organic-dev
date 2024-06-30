'@ts-nocheck ';
import React from 'react';
import { Divider } from '@nextui-org/react';

const matchedOrgans: any = [
  {
    id: 'ed125',
    percentage: '85%',
  },
  {
    id: 'fd564',
    percentage: '72%',
  },
  {
    id: 'bb795',
    percentage: '66%',
  },
];

const page = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-slate-100'>
      <div className='w-[60%] h-[80%] border shadow-xl rounded-xl flex'>
        {/* basic detail */}
        <div className='w-1/2 px-4 py-8'>
          <h1 className='font-extrabold text-3xl mb-2'>Basic Details</h1>
          <Divider />
          <div>
            <p>
              <br />
              <span className='font-semibold'>Organ Type:</span> Kidney <br />
              <span className='font-semibold'>Registration Data:</span>{' '}
              2024-06-15 <br />
              <span className='font-semibold'>Status:</span> Approved
              <br />
              <br />
            </p>
          </div>
          <Divider />
          <div>
            <p className='text-lg'>Matching Parameters</p>
            <p>
              <br />
              <span className='font-semibold'>Blood Group:</span> O+ve <br />
              <span className='font-semibold'>HIV:</span> Negative <br />
              <span className='font-semibold'>Hepatitis B:</span> Negative
              <br />
              <span className='font-semibold'>Hepatitis C:</span> Negative
              <br />
              <span className='font-semibold'>Serum Creatinine:</span> 1.0mg/dl
              <br />
              <span className='font-semibold'>
                Glomerular Filtration Rate (GFR):
              </span>{' '}
              90 mL/min/1.73 m²
              <br />
              <span className='font-semibold'>Biopsy Result:</span> No signs of
              glomerulosclerosis or interstitial fibrosis
              <br />
              <br />
            </p>
          </div>
        </div>
        {/* matching details */}
        <div className='w-1/2 px-4 py-8'>
          <h1 className='font-extrabold text-3xl mb-2'>Matching Details</h1>
          <Divider />
          <div>
            {/* no of match */}
            <p className='mt-2 px-2 py-1 border border-green-600 rounded-xl w-fit bg-green-100'>
              3 Matches
            </p>
            <div>
              {matchedOrgans.map((item: any) => {
                <p>
                  <span>id: ${item.id}</span>
                  <span>${item.percentage}</span>
                </p>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const listCard = ({ item }: any) => {
//   return (
//     <p>
//       <span>id: ${item.id}</span>
//       <span>${item.percentage}</span>
//     </p>
//   );
// };

export default page;
