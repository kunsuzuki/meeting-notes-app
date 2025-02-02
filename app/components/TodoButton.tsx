'use client';

import React, { useState } from 'react';
import { extractTodo } from '@/utils/todoExtract';
import DownloadMarkdownButton from './DownloadMarkdownButton';
// import ChatworkButton from './ChatworkButton';

interface TodoButtonProps {
  transcript: string;
}

const TodoButton: React.FC<TodoButtonProps> = ({ transcript }) => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleExtractTodo = async () => {
    if (!transcript.trim()) {
      alert('TODOを抽出するテキストがありません。');
      return;
    }

    setLoading(true);
    try {
      const result = await extractTodo(transcript);
      setTodoList(result.split("\n")); // 改行で分割してリストにする
    } catch (error) {
      console.error('TODO抽出に失敗しました:', error);
      alert('TODO抽出に失敗しました。');
    }
    setLoading(false);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button
        onClick={handleExtractTodo}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? '抽出中...' : 'TODOを抽出'}
      </button>

      {todoList.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <h3>抽出されたTODOリスト:</h3>
          <ul className="todo-list">
            {todoList.map((todo, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>✅ {todo}</li>
            ))}
          </ul>

          {/* ✅ Markdown エクスポートボタンを追加 */}
          <DownloadMarkdownButton todoList={todoList} />

          {/* ✅ Chatwork 送信ボタンを追加 */}
          {/* <ChatworkButton todoList={todoList} /> */}
        </div>
      )}
    </div>
  );
};

export default TodoButton;
