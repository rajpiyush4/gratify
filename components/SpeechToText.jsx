'use client'

import { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = ({setInput}) => {
  const [isClient, setIsClient] = useState(false) 

  useEffect(() => {
    setIsClient(true)
    return () => {
      setIsClient(false)
    }
  }, [])

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition){
    return isClient && <span>browser doesn't support microphone</span>
  }

  useEffect(()=>{
       setInput(transcript)
  }, [transcript])

  const startListening = () => SpeechRecognition.startListening({ continuous: true });
  return (
    <>
      {isClient &&
        (<div className='px-8 flex items-end flex-col'>
          <div className='flex'><Mic size={20} />: {listening ? 'on' : 'off'}</div>
          <div className='flex gap-2'>
            <button className='' type='button' onClick={() => startListening()}>Start</button>
            <button type='button' onClick={() => SpeechRecognition.stopListening()}>Stop</button>
            <button type='button' onClick={() => resetTranscript()}>Reset</button>
          </div>
          <p>{transcript}</p>
        </div>)
      }
    </>
  );
};
export default Dictaphone;