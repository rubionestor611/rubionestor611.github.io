
import {useState, useEffect, useRef} from "react";
import "./utils.css"
const FORWARD = 'forward';
const BACKWARD = 'backward';

const useTypingText = (words=["provide"], keySpeed=1000,maxPauseAmount=10) => {
  const [wordIndex,setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[wordIndex].split(''));
  const [isStopped, setIsStopped] = useState(false);

  const stop = () => {
    clearInterval(typingInterval.current);
    setIsStopped(true);
  }

  const direction = useRef(BACKWARD);
	const typingInterval = useRef<any>();
	const letterIndex = useRef<any>();

  useEffect(() => {
    let pauseCounter = 0;

    if(isStopped) return;

    const backspace = () => {
      if (letterIndex.current === 0) {
        const isOnLastWord = wordIndex === words.length - 1;
    
        setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
        direction.current = FORWARD;
    
        return;
      }

      const segment = currentWord.slice(0, currentWord.length - 1);
      setCurrentWord(segment);
      letterIndex.current = currentWord.length - 1;
    }

    
    const typeLetter = () => {
      if (letterIndex.current >= words[wordIndex].length) {
        direction.current = BACKWARD;
        pauseCounter = maxPauseAmount
        return;
      }
      const segment = words[wordIndex].split('');
      setCurrentWord(currentWord.concat(segment[letterIndex.current]));
      letterIndex.current = letterIndex.current + 1;
    }



    typingInterval.current = setInterval(() => {
      if(pauseCounter > 0) {
        pauseCounter -= 1;
      }

      if (direction.current === FORWARD) {
        typeLetter();
      } else {
        backspace();
      }
    }, keySpeed);

    return () => {
      clearInterval(typingInterval.current);
    }
  }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount]);

  return {
    word: (
      <span className={`word ${currentWord.length ? 'full' : 'empty'} ${isStopped ? 'cursor-pointer' : 'cursor-default'} text-[30px] sm:text-[40px]`} onClick={()=>{if(isStopped) { setCurrentWord(words[wordIndex].split('')); setWordIndex(0); setIsStopped(false); }}}>
	      <span>{currentWord.length ? currentWord.join('') : '0'}</span>
	    </span>
    ),
    start: () => setIsStopped(false),
    stop,
    text: currentWord.join('')
  }
}

export default useTypingText;