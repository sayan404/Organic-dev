'use server';
import { handleError } from './utils';
import axios from 'axios';
// const fs = require('fs');
// const FormData = require('form-data');

// const formData = new FormData();
// formData.append('file', fs.createReadStream('/path/to/file.pdf'));

// const options = {
//   headers: {
//     'x-api-key': 'sec_xxxxxx',
//     ...formData.getHeaders(),
//   },
// };

const config: any = {
  headers: {
    'x-api-key': 'sec_7vCnZxBllHl6L6CV2vYeA3PN5Ur6Kpbu',
    'Content-Type': 'application/json',
  },
};

// const data = {
//   url: 'https://uscode.house.gov/static/constitution.pdf',
// };

export async function uploadFiles({ formData }: any) {
  try {
    const response = await axios.post(
      'https://api.chatpdf.com/v1/sources/add-url',
      formData,
      {
        headers: {
          'x-api-key': 'sec_7vCnZxBllHl6L6CV2vYeA3PN5Ur6Kpbu',
          ...formData.getHeaders(),
        },
      }
    );
    const source_id = await response.data.sourceId;
    console.log('Source ID:', source_id);

    const content = await axios.post(
      'https://api.chatpdf.com/v1/chats/message',
      {
        // stream: true,
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

    return actual_content;
  } catch (error) {
    handleError(error);
  }
}
