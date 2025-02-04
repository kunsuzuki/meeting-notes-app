'use client';

import React from 'react';
import Header from '@/components/Header';

const HowToUse = () => {
  return (
    <>
    <Header />
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <h1>会議録音 & 文字起こしアプリの使い方</h1>
      <p>このアプリは、会議の録音・文字起こし・要約・TODO抽出を行うツールです。</p>

      <h2>📌 主な機能</h2>
      <ul>
        <li>🎤 音声録音 & 文字起こし</li>
        <li>📝 文字起こし内容の要約（AI要約）</li>
        <li>✅ TODOリストの自動抽出</li>
        <li>📂 議事録のダウンロード（Markdown, TXT）</li>
      </ul>

      <h2>🛠 使い方</h2>
      <ol>
        <li>「録音開始」ボタンを押して会話を録音</li>
        <li>録音停止後、自動的に文字起こしが表示される</li>
        <li>「要約」ボタンを押すと、議事録の要約を生成</li>
        <li>「TODO 抽出」ボタンを押すと、会議で決まったアクションアイテムをリストアップ</li>
        <li>「ダウンロード」ボタンで、議事録を保存</li>
      </ol>
    </div>
    </>
  );
};

export default HowToUse;
