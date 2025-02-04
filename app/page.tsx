'use client';

import React, { useState, useRef } from 'react';
import SummaryButton from './components/SummaryButton';
import TodoButton from '@/components/TodoButton';
import WordListManager from './components/WordListManager';
import Header from './components/Header';
import '@/styles/main.css';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const HomePage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string>('');
  const [wordList, setWordList] = useState<Record<string, string>>({});
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleRecordClick = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    } else {
      startRecording();
      setIsRecording(true);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognitionAPI) {
        alert('このブラウザは Web Speech API をサポートしていません。');
        return;
      }

      const recognition = new SpeechRecognitionAPI();
      recognition.lang = 'ja-JP';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = (event: any) => {
        let fullTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          fullTranscript += event.results[i][0].transcript;
        }
        setTranscript(fullTranscript);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (error) {
      console.error('録音エラー:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center'}}>
      <Header />
      <button className='record-button' onClick={handleRecordClick}>{isRecording ? '録音停止' : '録音開始'}</button>

      <p className='record-text'>{transcript}</p>

      {/* 単語リスト管理コンポーネント */}
      <WordListManager onUpdate={setWordList} />

      {transcript && <SummaryButton transcript={transcript} wordList={wordList} />}
      {transcript && <TodoButton transcript={transcript} />}
    </div>
  );
};

export default HomePage;
