import { File } from '../typings';

export const fetchFiles = async (): Promise<File[]> => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFiles`);

  const data = await result.json();
  const files: File[] = data.files;
  return files;
};
