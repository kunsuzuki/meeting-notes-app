'use client';

import React, { useState } from 'react';
import { summarizeAndExtractTodos } from '@/utils/summaryTodo';
import DownloadSummaryButton from './DownloadSummaryButton';
import DownloadMarkdownButton from './DownloadMarkdownButton';

interface SummaryTodoButtonProps {
  transcript: string;
  wordList: Record<string, string>;
}

const SummaryTodoButton: React.FC<SummaryTodoButtonProps> = ({ transcript, wordList }) => {
  const [summary, setSummary] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleProcess = async () => {
    if (!transcript.trim()) {
      alert('要約・TODO抽出するテキストがありません。');
      return;
    }

    setLoading(true);
    try {
      const result = await summarizeAndExtractTodos(transcript, wordList);
      setSummary(result.summary);
      setTodoList(result.todoList);
    } catch (error) {
      console.error('処理に失敗しました:', error);
      alert('処理に失敗しました。');
    }
    setLoading(false);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button
        onClick={handleProcess}
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
        {loading ? '処理中...' : '要約 & TODO 抽出'}
      </button>

      {summary && (
        <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <h3>要約結果:</h3>
          <p style={{ whiteSpace: 'pre-wrap', background: '#f3f3f3', padding: '10px', borderRadius: '5px' }}>
            {summary}
          </p>
          <DownloadSummaryButton summary={summary} />
        </div>
      )}

      {todoList.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <h3>抽出されたTODOリスト:</h3>
          <ul className="todo-list">
            {todoList.map((todo, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>✅ {todo}</li>
            ))}
          </ul>
          <DownloadMarkdownButton todoList={todoList} />
        </div>
      )}
    </div>
  );
};

export default SummaryTodoButton;
