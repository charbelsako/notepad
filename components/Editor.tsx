import React, { useEffect, useState } from 'react';
import { File } from '../typings';

type Props = {
  file: File;
};

function Editor({ file }: Props) {
  const [content, setContent] = useState(file.content);

  useEffect(() => {
    console.log('use effect ran');
    setContent(file.content);
  }, [file]);

  const changeContent = (event: any) => {
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
