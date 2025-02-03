'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '@/styles/main.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <h1>
          <Link href="/" className="logo">
            会議録音 & 文字起こしアプリ
          </Link>
        </h1>
        
        {/* ✅ ハンバーガーメニュー（アイコン適用） */}
        <div onClick={() => setIsOpen(true)} className="menu-button">
          <span className="material-icons">apps</span>
        </div>
      </header>

      {/* ✅ スムーズに開閉するモーダルメニュー */}
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <div className="menu-window">
          <button onClick={() => setIsOpen(false)} className="close-button">
            <span className="material-icons">close</span>
          </button>

          <h3>メニュー</h3>
          <nav>
            <ul>
              <li><Link href="/">🏠 Home</Link></li>
              <li><Link href="/how-to-use">📖 How to Use</Link></li>
              <li><Link href="/privacy-policy">🔒 Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
