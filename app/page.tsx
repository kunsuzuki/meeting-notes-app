'use client';

import React, { useState, useRef } from 'react';
import SummaryTodoButton from '@/components/SummaryTodoButton';
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
      // 🔴 録音 & 文字起こしを停止
      recognitionRef.current?.stop();
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    } else {
      // 🎤 録音開始
      startRecording();
      setIsRecording(true);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // 🎙 音声認識
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

      // 🎤 メディアレコーダー
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
    } catch (error) {
      console.error('録音エラー:', error);
    }
  };

  // 🎵 音声ファイルをダウンロードする関数
  const downloadAudio = () => {
    if (!audioUrl) return;
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = 'recording.mp3';
    a.click();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <button className='record-button' onClick={handleRecordClick}>
        {isRecording ? '録音停止' : '録音開始'}
      </button>

      <p className='record-text'>{transcript}</p>

      {/* 単語リスト管理コンポーネント */}
      <WordListManager onUpdate={setWordList} />

      {/* 📝 要約 & TODO 抽出 */}
      <SummaryTodoButton transcript={transcript} wordList={wordList} />

      {/* 🎵 録音データダウンロードボタン */}
      {audioUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>録音完了</h3>
          <button
            onClick={downloadAudio}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: 'purple',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            音声をダウンロード
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
