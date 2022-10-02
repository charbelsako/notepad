import axios from 'axios';
import { File } from '../typings';

export const createFile = async (filename: string, content: string = '', _type: string = 'file'): Promise<File> => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/postFile`, { filename, content });

  const data = await result.data;
  const file: File = data.createdFile;
  return file;
};
