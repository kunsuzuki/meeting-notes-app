import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return NextResponse.json({ error: "APIキーが設定されていません" }, { status: 500 });
  }

  const { text, wordList } = await req.json();
  const wordRules = Object.entries(wordList)
    .map(([short, full]) => `${short} を ${full} に変換してください。`)
    .join('\n');

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `以下のルールに従って要約してください。\n${wordRules}\n\n${text}` }] }],
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: `APIエラー: ${response.status}` }, { status: response.status });
  }

  const data = await response.json();
  return NextResponse.json({ summary: data?.candidates?.[0]?.content?.parts?.[0]?.text });
}
