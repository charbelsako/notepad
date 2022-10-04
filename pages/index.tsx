import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import Menu from '../components/Menu';
import Editor from '../components/Editor';
import { File } from '../typings';
import { fetchFiles } from '../utils/fetchFiles';

interface Props {
  files: File[];
}

const Home: NextPage<Props> = ({ files }: Props) => {
  const [myFiles, setMyFiles] = useState(files);
  const [selectedFile, setSelectedFile] = useState<File>(files[0]);
  const [content, setContent] = useState('');

  const openFile = (index: number): void => {
    // Get the content of the file
    const file: File = myFiles[index];
    // Pass to Editor
    setSelectedFile(file);
  };

  return (
    <div className='flex flex-row w-full'>
      <Menu
        openFile={openFile}
        content={content}
        files={myFiles}
        selectedFile={selectedFile}
        setFiles={setMyFiles}
        setSelectedFile={setSelectedFile}
      />
      <Editor file={selectedFile} content={content} setContent={setContent} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const files: File[] = await fetchFiles();
  return {
    props: {
      files,
    },
  };
};

export default Home;
