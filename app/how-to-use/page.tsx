'use client';

import React from 'react';
import Header from '@/components/Header';

const HowToUse = () => {
  return (
    <>
    <Header />
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <h2>How to use</h2>
      <p>このアプリは、会議の録音・文字起こし・要約・TODO抽出を行うツールです。</p>

      <h3>📌 主な機能</h3>
      <ul>
        <li>🎤 音声録音 & 文字起こし</li>
        <li>📝 文字起こし内容の要約（AI要約）</li>
        <li>✅ TODOリストの自動抽出</li>
        <li>📂 議事録のダウンロード（Markdown, TXT）</li>
      </ul>

      <h3>🛠 使い方</h3>
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
