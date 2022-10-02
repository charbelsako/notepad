import React, { useEffect } from 'react';
import { File } from '../typings';

interface Props {
  file: File;
  content: string;
  setContent: Function;
}

function Editor({ file, content, setContent }: Props): JSX.Element {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!file) return;
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
