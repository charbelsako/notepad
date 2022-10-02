import axios from 'axios';
import { File } from '../typings';

export const removeFile = async (id: string): Promise<File> => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const result = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteFile?id=${id}`);

  const data = await result.data;
  const file: File = data.deletedFile;
  return file;
};
