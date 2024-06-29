// components/PdfUploader.tsx
import { useState } from 'react';
import { uploadFiles } from '../lib/actions/upload-pdf.action';

const PdfUploader: React.FC = ({ setContent, organId }: any) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setPreview(fileUrl);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const response = await uploadFiles(formData, organId);

    if (response) {
      setContent(response);
      alert('File uploaded successfully');
    } else {
      alert('Failed to upload file');
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 p-4 border border-gray-200 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>PDF Uploader</h2>
      <input
        type='file'
        accept='application/pdf'
        onChange={handleFileChange}
        className='mb-4'
      />
      {preview && (
        <div className='mb-4'>
          <embed src={preview} type='application/pdf' className='w-full h-64' />
        </div>
      )}
      <button
        onClick={handleUpload}
        className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600'
      >
        Upload
      </button>
    </div>
  );
};

export default PdfUploader;
