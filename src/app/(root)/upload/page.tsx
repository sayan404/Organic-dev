'use client';
import React, { useState } from 'react';
// import { uploadFiles } from '@/src/lib/actions/upload-pdf.action';
import PdfUploader from '@/src/components/PdfUploader';
const UploadPage = () => {
  const [content, setContent] = useState('');
  //   const handleOnclick = async () => {
  //     const data = await uploadFiles();
  //     setContent(data);
  //   };
  return (
    <div className='p-4 flex flex-col items-center gap-2'>
      <PdfUploader setContent={setContent} />
      {/* <button className='bg-red-400 p-4 w-fit' onClick={handleOnclick}>
        Retrive Text Data
      </button> */}
      <section className='bg-slate-200 h-auto p-2 w-[80%] rounded-lg'>
        {content}
      </section>
    </div>
  );
};

export default UploadPage;
