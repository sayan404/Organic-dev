//write all utility functions here
import axios from 'axios';

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === 'string') {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

export const matchOrgans = async (url: string, prompt: string, organDesc: string, organTobeMatchedDesc: string) => {
  try {
    const response: any = await axios.post(url, {
      contents: [
        {
          parts: [
            {
              text:
                prompt +
                `data-1: ${organDesc}, data-2: ${organTobeMatchedDesc}`,
            },
          ],
        },
      ],
    });
  
    return response.data?.candidates?.content?.parts?.text;
  }
  catch(error) {
    handleError(error);
  }
};
