'use client';

import React, { useState, useRef } from 'react';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const HomePage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string>(''); // 文字起こし結果
  const [audioUrl, setAudioUrl] = useState<string | null>(null); // 音声ファイル
  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleRecordClick = () => {
    if (isRecording) {
      // 録音 & 文字起こし停止
      recognitionRef.current?.stop();
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    } else {
      // 🎤 録音 & 文字起こし開始
      startRecording();
      setIsRecording(true);
    }
  };

  const startRecording = async () => {
    try {
      // 🎙 マイクの音声ストリームを取得
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // 📝 Web Speech API の設定
      const SpeechRecognitionAPI =
        window.SpeechRecognition || window.webkitSpeechRecognition;
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

      // 🎤 メディアレコーダーの設定
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

  const downloadAudio = () => {
    if (!audioUrl) return;
    const a = document.createElement('a');
    a.href = audioUrl;
    a.download = 'recording.mp3';
    a.click();
  };

  const downloadTranscript = () => {
    const blob = new Blob([transcript], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meeting_notes.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>会議録音 & 文字起こしアプリ</h1>
      <button
        onClick={handleRecordClick}
        style={{
          padding: '15px 30px',
          fontSize: '16px',
          backgroundColor: isRecording ? 'red' : 'green',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {isRecording ? '録音停止' : '録音開始'}
      </button>

      <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <h3>文字起こし結果:</h3>
        <p style={{ whiteSpace: 'pre-wrap', background: '#f3f3f3', padding: '10px', borderRadius: '5px' }}>
          {transcript}
        </p>
      </div>

      {transcript && (
        <button
          onClick={downloadTranscript}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          メモをダウンロード
        </button>
      )}

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
