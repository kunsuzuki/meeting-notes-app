export async function extractTodo(text: string): Promise<string> {
  const response = await fetch('/api/todoExtract', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`APIエラー: ${response.status}`);
  }

  const data = await response.json();
  return data.todoList || "TODO抽出に失敗しました。";
}
