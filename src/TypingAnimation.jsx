import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const message = "ToolsIt";

  useEffect(() => {
    let charIndex = 0;
    let isUnmounted = false;

    const typeInterval = setInterval(() => {
      if (charIndex <= message.length && !isUnmounted) {
        setText(message.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        if (!isUnmounted) {
          setTimeout(() => {
            setIsTyping(false);
            setTimeout(() => {
              setIsTyping(true);
              charIndex = 0;
            }, 500); // Adjust delay before re-typing (ms)
          }, 1000); // Adjust delay before clearing and re-typing (ms)
        }
      }
    }, 200); // Adjust typing speed (ms)

    return () => {
      clearInterval(typeInterval);
      isUnmounted = true;
    };
  }, []);

  return (
    <div className="text-center mb-20">
      <h2 className="sm:mt-4 text-4xl md:text-9xl font-medium text-gray-900 mb-4 flex items-center justify-center">
        <pre className={classNames({ 'opacity-100': isTyping, 'opacity-0': !isTyping })}>
          {text}
        </pre>
      </h2>
    </div>
  );
};

export default TypingAnimation;