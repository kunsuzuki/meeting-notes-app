'use client';

import React, { useState } from 'react';
import { summarizeText } from '@/utils/summarize';
import DownloadSummaryButton from './DownloadSummaryButton';

interface SummaryButtonProps {
  transcript: string;
  wordList: Record<string, string>;
}

const SummaryButton: React.FC<SummaryButtonProps> = ({ transcript, wordList }) => {
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSummarize = async () => {
    if (!transcript.trim()) {
      alert('要約するテキストがありません。');
      return;
    }

    setLoading(true);
    try {
      const result = await summarizeText(transcript, wordList);
      setSummary(result);
    } catch (error) {
      console.error('要約に失敗しました:', error);
      alert('要約に失敗しました。');
    }
    setLoading(false);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button
        onClick={handleSummarize}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? '要約中...' : '要約'}
      </button>

      {summary && (
        <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <h3>要約結果:</h3>
          <p style={{ whiteSpace: 'pre-wrap', background: '#f3f3f3', padding: '10px', borderRadius: '5px' }}>
            {summary}
          </p>

          {/* ✅ ダウンロードボタンを追加 */}
          <DownloadSummaryButton summary={summary} />
        </div>
      )}
    </div>
  );
};

export default SummaryButton;
