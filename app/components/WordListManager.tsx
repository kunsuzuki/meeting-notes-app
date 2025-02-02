'use client';

import React, { useState, useEffect } from 'react';
import '@/styles/main.css';

interface WordListManagerProps {
  onUpdate: (wordList: Record<string, string>) => void;
}

const STORAGE_KEY = 'wordList';

const WordListManager: React.FC<WordListManagerProps> = ({ onUpdate }) => {
  const [wordList, setWordList] = useState<Record<string, string>>({
  });

    // 📥 初回レンダリング時に localStorage からデータを読み込む
    useEffect(() => {
        const storedList = localStorage.getItem(STORAGE_KEY);
        if (storedList) {
          const parsedList = JSON.parse(storedList);
          setWordList(parsedList);
          onUpdate(parsedList);
        }
      }, [onUpdate]);

  const [newWord, setNewWord] = useState('');
  const [newMeaning, setNewMeaning] = useState('');

  const handleAddWord = () => {
    if (!newWord.trim() || !newMeaning.trim()) return;

    const updatedList = { ...wordList, [newWord]: newMeaning };
    setWordList(updatedList);
    onUpdate(updatedList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList)); // 📤 localStorage に保存
    setNewWord('');
    setNewMeaning('');
  };

  const handleRemoveWord = (word: string) => {
    const updatedList = { ...wordList };
    delete updatedList[word];
    setWordList(updatedList);
    onUpdate(updatedList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList)); // 📤 localStorage に保存
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
      <h3>単語リスト設定</h3>
      <ul style={{ background: '#f3f3f3', padding: '10px', borderRadius: '5px' }}>
        {Object.entries(wordList).map(([word, meaning]) => (
          <li className='word-item-list' key={word}>
            <b>{word}</b> = {meaning}
            <button className='delete-button' onClick={() => handleRemoveWord(word)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="変換前の単語"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        className='replaceable-input'
      />
      <input
        type="text"
        placeholder="変換後の単語"
        value={newMeaning}
        onChange={(e) => setNewMeaning(e.target.value)}
        className='replaceable-input'
      />
      <button onClick={handleAddWord} className='add-button'>Add</button>
    </div>
  );
};

export default WordListManager;
