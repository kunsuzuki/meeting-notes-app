'use client';

import React from 'react';

interface DownloadMarkdownButtonProps {
  todoList: string[];
}

const DownloadMarkdownButton: React.FC<DownloadMarkdownButtonProps> = ({ todoList }) => {
  const handleDownloadMarkdown = () => {
    if (todoList.length === 0) {
      alert('エクスポートするTODOがありません。');
      return;
    }

    // 📄 Markdown 形式のテキストを作成
    const markdownContent = `# TODOリスト\n\n${todoList.map(todo => `- [ ] ${todo}`).join('\n')}`;

    // 📝 Markdown ファイルとしてダウンロード
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'todo_list.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownloadMarkdown}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '10px',
      }}
    >
      📥 TODOをMarkdownでエクスポート
    </button>
  );
};

export default DownloadMarkdownButton;
