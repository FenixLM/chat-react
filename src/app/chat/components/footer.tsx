// @ts-check
import React, { useState } from 'react';
import { FaRegPaperPlane } from "react-icons/fa";


const ChatFooter = ({ inputRef, disabled, sendMessage }: any) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') handleSend();
  };

  const handleSend = () => {
    const message = inputValue.trim();
    if (message === '') return;
    sendMessage(message);
    setInputValue('');
  }

  return (
    <div className='flex align-center w-full bg-n25  p-5' >
      {
          <>
            <input
              ref={inputRef}
              type='text'
              className={`w-full flex-1 px-4 py-2 mr-2 rounded border border-n100`}
              value={inputValue}
              onChange={handleInputChange}
              placeholder='Escribe un mensaje'
              disabled={disabled}
              onKeyDown={handleKeyPress}
            />
            <button id='send-button' className={`bg-primary text-white rounded-full  p-3 `} onClick={handleSend} disabled={disabled}>
              <FaRegPaperPlane size={20} />
            </button>
          </>
      }
    </div>
  )
}

export default ChatFooter;