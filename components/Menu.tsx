import React from 'react';
import {
  AiOutlineFileAdd,
  AiOutlineFileText,
  AiOutlineSave,
  AiOutlineDelete,
} from 'react-icons/ai';
import { File } from '../typings.d';
import { createFile } from '../utils/createFile';
import { updateFile } from '../utils/updateFile';
import { removeFile } from '../utils/removeFile';

interface Props {
  openFile: Function;
  files: File[];
  selectedFile: File;
  content: string;
  setFiles: Function;
  setSelectedFile: Function;
}

function Menu({
  openFile,
  files,
  selectedFile,
  content,
  setFiles,
  setSelectedFile,
}: Props): JSX.Element {
  const makeNewFile = (): void => {
    // @TODO: use a form modal or something
    const prompt: string | null = window.prompt('File name');
    const filename = prompt !== null && prompt.length > 0 ? prompt : 'default';
    const foundFile = files.filter(file => file.filename === filename);
    if (foundFile.length > 0) {
      window.alert('A file with that name already exists');
      return;
    }
    // Call API to save file
    createFile(filename)
      .then(doc => setFiles([...files, doc]))
      .catch(e => console.error(e));
  };

  const saveFile = (): void => {
    // Call API to save file
    updateFile({ ...selectedFile, content })
      .then(doc =>
        setFiles([...files.filter(file => file._id !== doc._id), doc])
      )
      .catch(e => console.error(e));
  };

  const deleteFileButton = (id: string): void => {
    // Call API to save file
    // ...files.filter(file => file._id !== doc._id)
    removeFile(id)
      .then(() => {
        setFiles([...files.filter(file => file._id !== id)]);
      })
      .catch(e => console.error(e));
  };

  return (
    <div className='h-screen flex flex-col text-left w-[250px] border border-gray/30 text-black bg-white'>
      <header className='p-2 flex flex-row justify-center items-center w-full'>
        <h1>Notepad</h1>
        <div className='flex ml-auto space-x-2'>
          <button
            onClick={makeNewFile}
            className='hover:bg-gray-400/40 p-1 rounded'
          >
            <AiOutlineFileAdd />
          </button>
          <button
            onClick={saveFile}
            className='hover:bg-gray-400/40 p-1 rounded'
          >
            <AiOutlineSave />
          </button>
        </div>
      </header>
      <hr className='py-3 mt-3' />
      <section id='fileList '>
        <ul className='space-y-0 flex flex-col'>
          {files.map((file, index) => (
            <button
              key={index}
              onClick={() => openFile(index)}
              className={`py-1 hover:bg-gray-200/70 ${
                file._id === selectedFile._id ? 'bg-gray-200/70' : ''
              }`}
            >
              <li className={'w-full pl-3  cursor-pointer flex items-center'}>
                <AiOutlineFileText className='mr-2' />
                <span className='text-[13px]'>{file.filename}</span>
                <div className='flex ml-auto hover:text-red-500 transition duration-100'>
                  <button
                    onClick={() => deleteFileButton(file._id)}
                    className='mr-3 rounded'
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </li>
            </button>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Menu;
