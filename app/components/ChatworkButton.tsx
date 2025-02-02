'use client';

import React, { useState } from 'react';
import { sendToChatwork } from '@/utils/chatwork';

interface ChatworkButtonProps {
  todoList: string[];
}

const ChatworkButton: React.FC<ChatworkButtonProps> = ({ todoList }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendToChatwork = async () => {
    if (todoList.length === 0) {
      alert('送信するTODOがありません。');
      return;
    }

    setLoading(true);
    try {
      const result = await sendToChatwork(todoList);
      alert(result);
    } catch (error) {
      console.error('Chatwork送信エラー:', error);
      alert('Chatworkへの送信に失敗しました。');
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleSendToChatwork}
      disabled={loading}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'orange',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: loading ? 'not-allowed' : 'pointer',
        marginTop: '10px',
      }}
    >
      {loading ? '送信中...' : '📨 Chatwork に送信'}
    </button>
  );
};

export default ChatworkButton;
