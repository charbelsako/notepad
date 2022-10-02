import React, { useEffect, useState } from 'react';
import { File } from '../typings';

interface Props {
  file: File;
}

function Editor({ file }: Props): JSX.Element {
  const [content, setContent] = useState('');

  useEffect(() => {
    console.log('use effect ran');
    setContent(file.content);
  }, [file]);

  const changeContent = (event: any): void => {
    setContent(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className='w-full h-screen'>
      <textarea
        name='content'
        id='content'
        className='w-full h-screen border-none focus:outline-none resize-none'
        value={content}
        onChange={changeContent}
      ></textarea>
    </div>
  );
}

export default Editor;
