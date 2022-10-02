import axios from 'axios';
import { File } from '../typings';

export const updateFile = async ({ _id, filename, content }: File): Promise<File> => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const result = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/patchFile`, { _id, filename, content });

  const data = await result.data;
  const file: File = data.updatedFile;
  return file;
};
