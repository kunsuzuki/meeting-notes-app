'use client';

import React from 'react';
import Header from '@/components/Header';

const HowToUse = () => {
  return (
    <>
    <Header />
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <h2 style={{ fontSize: '24px' }}>How to use<span style={{ fontSize: '14px' }}> - 使い方-</span></h2>
      <p>
        このアプリは、音声の録音・文字起こし・要約・TODO抽出を行うツールです。<br/>
        会議の内容を録音したり、議事録用に要点を抽出することができます。<br />

      </p>

      <h3>📌 主な機能</h3>
      <ul>
        <li>🎤 音声録音 & リアルタイム文字起こし</li>
        <li>📝 文字起こし内容の要約（AI要約）</li>
        <li>✅ TODOリストの自動抽出</li>
        <li>📂 議事録のダウンロード（Markdown, TXT）</li>
      </ul>

      <h3>🛠 使い方</h3>
      <ol>
        <li>「録音開始」ボタンを押して会話を録音</li>
        <li>録音中リアルタイムで自動的に文字起こしが表示される</li>
        <li>「要約 & TODO 抽出」ボタンを押すと、議事録の要約とTODOリストを生成</li>
        <li>「ダウンロード」ボタンで、要約内容とTODOリストを保存</li>
        <li>「音声をダウンロード」ボタンで、録音した音声データをmp3形式で保存</li>
      </ol>

    <h3>💡 注意点</h3>
        <p>
          要約、TODO抽出機能は、Gemini AIを使用しています。<br />
          無料のAPIを利用しているため使用に制限がかかる場合があります。<br />
          あらかじめご了承ください。
        </p>
    </div>
    </>
  );
};

export default HowToUse;
