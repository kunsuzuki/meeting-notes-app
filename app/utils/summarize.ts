export async function summarizeText(text: string, wordList: Record<string, string>): Promise<string> {
  const response = await fetch('/api/summarize', { // ✅ Next.js の API Route を経由
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, wordList }),
  });

  if (!response.ok) {
    throw new Error(`APIエラー: ${response.status}`);
  }

  const data = await response.json();
  return data.summary || "要約に失敗しました。";
}
