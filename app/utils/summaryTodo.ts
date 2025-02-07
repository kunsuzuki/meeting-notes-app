export async function summarizeAndExtractTodos(text: string, wordList: Record<string, string>) {
    const response = await fetch('/api/summaryTodo', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, wordList }),
    });
  
    if (!response.ok) {
      throw new Error(`APIエラー: ${response.status}`);
    }
  
    return response.json();
  }
  