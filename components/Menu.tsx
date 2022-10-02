import React, { useContext, useEffect, useState } from 'react';
import {
  AiOutlineFileAdd,
  AiOutlineFileText,
  AiOutlineSave,
} from 'react-icons/ai';
import { FileContext } from '../pages/index';
import { sanityClient } from '../sanity';

interface Props {
  openFile: Function;
}

function Menu({ openFile }: Props): JSX.Element {
  // Call api and get all files (maybe names or content as well)
  const [files, setFiles] = useContext(FileContext);

  const createFile = async (): Promise<void> => {
    // @TODO: use a form modal or something
    const filename: string = window.prompt('File name') || 'Default+';
    const foundFile = files.filter(file => file.filename === filename);
    if (foundFile.length > 0) {
      window.alert('A file with that name already exists');
      return;
    }
    // Call API to save file
    const newFile = { _type: 'file', filename, content: '' };
    const mutation = await sanityClient.create(newFile);
    await mutation.commit();
    // Set the files
    setFiles([...files, newFile]);
  };

  return (
    <div className='h-screen flex flex-col text-left w-[250px] border border-gray/30 text-black bg-white'>
      <header className='py-1 flex flex-row justify-center items-center w-full'>
        <h1 className='px-2 pt-2'>Notepad</h1>
        <div className='flex ml-auto pr-2 space-x-2'>
          <button
            onClick={() => createFile()}
            className='hover:bg-gray-400/40 p-1 rounded'
          >
            <AiOutlineFileAdd />
          </button>
          <button
            onClick={() => createFile()}
            className='hover:bg-gray-400/40 p-1 rounded'
          >
            <AiOutlineSave />
          </button>
        </div>
      </header>
      <hr className='py-3 mt-3' />
      <section id='fileList '>
        <ul className='space-y-1 flex flex-col'>
          {files.map((file, index) => (
            <button key={index} onClick={() => openFile(index)}>
              <li className='w-full pl-3 hover:bg-gray-200/70 cursor-pointer flex items-center'>
                <AiOutlineFileText className='mr-2' />
                <span className='text-[13px]'>{file.filename}</span>
              </li>
            </button>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Menu;
