import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { USER_INFO } from '@/user-info';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    const { messages } = await request.json();

    // 시스템 프롬프트에 사용자 정보 포함
    const systemPrompt = `${USER_INFO}

당신은 위 정보를 바탕으로 사용자와 자연스럽게 대화하며, 사용자에 대한 질문에 친절하고 정확하게 답변해야 합니다.
대화는 친근하고 따뜻한 톤으로 진행하며, 사용자가 제공한 정보를 활용하여 개인화된 응답을 제공하세요.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const assistantMessage = completion.choices[0]?.message?.content || '응답을 생성할 수 없습니다.';

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('OpenAI API 오류:', error);
    return NextResponse.json(
      { error: '챗봇 응답을 생성하는 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

