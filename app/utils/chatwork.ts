export async function sendToChatwork(todoList: string[]): Promise<string> {
    const API_TOKEN = process.env.NEXT_PUBLIC_CHATWORK_API_TOKEN;
    const ROOM_ID = process.env.NEXT_PUBLIC_CHATWORK_ROOM_ID;
  
    if (!API_TOKEN || !ROOM_ID) {
      throw new Error("Chatwork API トークンまたはルームIDが設定されていません");
    }
  
    const message = `[info][title]TODOリスト[/title]\n${todoList.map(todo => `- ${todo}`).join('\n')}[/info]`;
  
    const response = await fetch(`https://api.chatwork.com/v2/rooms/${ROOM_ID}/messages`, {
      method: "POST",
      headers: {
        "X-ChatWorkToken": API_TOKEN,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ body: message }).toString(),
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Chatwork API エラー:", response.status, errorText);
      throw new Error(`Chatwork APIエラー: ${response.status} - ${errorText}`);
    }
  
    return "Chatwork に送信しました！";
  }
  