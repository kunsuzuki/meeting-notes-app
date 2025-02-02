import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return NextResponse.json({ error: "APIキーが未設定です" }, { status: 500 });
  }

  const requestBody = await req.json();

  try {
    const response = await fetch("https://api.gemini.com/v1/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ text: requestBody.text }),
    });

    const data = await response.json();
    return NextResponse.json({ summary: data.summary });
  } catch (error) {
    return NextResponse.json({ error: "要約に失敗しました" }, { status: 500 });
  }
}
