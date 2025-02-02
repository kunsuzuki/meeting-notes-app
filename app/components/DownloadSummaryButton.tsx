'use client';

import React from 'react';

interface DownloadSummaryButtonProps {
  summary: string;
}

const DownloadSummaryButton: React.FC<DownloadSummaryButtonProps> = ({ summary }) => {
  const handleDownload = (format: 'md' | 'txt') => {
    if (!summary.trim()) {
      alert('ダウンロードする要約がありません。');
      return;
    }

    const fileName = `summary.${format}`;
    const content = format === 'md' ? `# 会議の要約\n\n${summary}` : summary;
    const blob = new Blob([content], { type: format === 'md' ? 'text/markdown' : 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <button
        onClick={() => handleDownload('md')}
        style={{
          padding: '10px 15px',
          fontSize: '14px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        📥 Markdown でダウンロード
      </button>
      <button
        onClick={() => handleDownload('txt')}
        style={{
          padding: '10px 15px',
          fontSize: '14px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        📥 TXT でダウンロード
      </button>
    </div>
  );
};

export default DownloadSummaryButton;
