import './record.css';

import React, { useState, useRef } from "react";



const Record = () => {

    const [recording, setRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);


    const startRecording = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          mediaRecorderRef.current = new MediaRecorder(stream);
    
          mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
              chunksRef.current.push(event.data);
            }
          };
    
          mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: "audio/wav" });
            const url = URL.createObjectURL(blob);
            setAudioUrl(url);
            chunksRef.current = [];
          };
    
          mediaRecorderRef.current.start();
          setRecording(true);
        } catch (error) {
          console.error("Error accessing microphone:", error);
        }
      };
    
      const stopRecording = () => {
        if (mediaRecorderRef.current) {
          mediaRecorderRef.current.stop();
          setRecording(false);
        }
      };

    return (
        <>
        <h4>Record</h4>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Audio Recorder</h1>
            {!recording ? (
                <button onClick={startRecording} className='record-button'>
                Start Recording
                </button>
            ) : (
                <button onClick={stopRecording} >
                Stop Recording
                </button>
            )}
            {audioUrl && (
                <div style={{ marginTop: "20px" }}>
                <h2>Recorded Audio:</h2>
                <audio src={audioUrl} controls style={{ marginTop: "10px" }} />
                <br />
                <a href={audioUrl} download="recording.wav" >
                    Download Recording
                </a>
                </div>
            )}
            </div>
        </>
    )

}

export default Record;