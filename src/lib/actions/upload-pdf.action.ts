'use server';
import { handleError } from '../utils';
import axios from 'axios';
import dbConnect from '@/src/config/dbConfig';

const config: any = {
  headers: {
    'x-api-key': 'sec_7vCnZxBllHl6L6CV2vYeA3PN5Ur6Kpbu',
    'Content-Type': 'application/json',
  },
};

export async function uploadFiles(formData: any, organId: string) {
  try {
    //db connect
    await dbConnect();
    const response = await axios.post(
      'https://api.chatpdf.com/v1/sources/add-file',
      formData,
      {
        headers: {
          'x-api-key': 'sec_7vCnZxBllHl6L6CV2vYeA3PN5Ur6Kpbu',
        },
      }
    );
    const source_id = await response.data.sourceId;
    console.log('Source ID:', source_id);

    const content = await axios.post(
      'https://api.chatpdf.com/v1/chats/message',
      {
        sourceId: source_id,
        messages: [
          {
            role: 'user',
            content: 'give me the summery of the entire pdf file',
          },
        ],
      },
      config
    );

    const actual_content = content.data.content;
    console.log(actual_content);

    //upload the content to the organ table
    

    return actual_content;
  } catch (error) {
    handleError(error);
  }
}
