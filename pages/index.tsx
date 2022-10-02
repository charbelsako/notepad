import type { NextPage } from 'next';
import Menu from '../components/Menu';
import Editor from '../components/Editor';
import { createContext, useState } from 'react';
import { File } from '../typings';

const myFiles: File[] = [{ filename: 'index', content: 'Some Basic Content' }];

export const FileContext = createContext<[File[], Function]>([
  myFiles,
  () => {},
]);

const Home: NextPage = () => {
  const [files, setFiles] = useState([
    { filename: 'index', content: 'Some Basic Content' },
  ]);

  const [selectedFile, setSelectedFile] = useState<File>(files[0]);

  const openFile = (index: number) => {
    console.log('This is the index', index);
    console.log('This is the state', files);
    // Get the content of the file
    const file: File = files[index];
    // Pass to Editor
    setSelectedFile(file);
  };

  return (
    <FileContext.Provider value={[files, setFiles]}>
      <div className='flex flex-row w-full'>
        <Menu openFile={openFile} />
        <Editor file={selectedFile} />
      </div>
    </FileContext.Provider>
  );
};

export default Home;
