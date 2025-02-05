'use client';

import React from 'react';
import Header from '@/components/Header';

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <h2>Privacy Policy</h2>
      <p>当サイトでは、Google AdSense の広告サービスを利用しています。</p>

      <h3>📌 Google AdSense の利用について</h3>
      <p>
        当サイトでは、第三者配信事業者である Google による広告配信を行っております。
        Google は、Cookie を使用して、ユーザーの過去の訪問履歴に基づいた広告を配信します。
      </p>

      <h3>📌 個人情報の取り扱い</h3>
      <p>
        当サイトでは、Google Analytics によるアクセス解析を行っております。
        収集される情報には、個人を特定できる情報は含まれません。
      </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
