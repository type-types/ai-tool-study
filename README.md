# 나를 아는 챗봇 웹사이트

당신에 대한 정보를 알고 있는 AI 챗봇과 대화할 수 있는 웹사이트입니다.

## 기능

- 🤖 개인화된 AI 챗봇 대화
- 💬 실시간 메시지 전송 및 수신
- 📱 반응형 디자인 (모바일 및 데스크톱 지원)
- 🌙 다크 모드 지원 (시스템 설정 기반)

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 OpenAI API 키를 설정하세요:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. 사용자 정보 설정

`user-info.ts` 파일을 열어서 자신의 정보를 입력하세요:

```typescript
export const USER_INFO = `
당신은 저에 대해 잘 알고 있는 AI 어시스턴트입니다. 아래는 제에 대한 정보입니다:

**기본 정보**
- 이름: [여기에 이름을 입력하세요]
- 나이: [나이]
...
`;
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
ai-tool-study/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts      # 챗봇 API 엔드포인트
│   ├── globals.css           # 전역 스타일
│   ├── layout.tsx            # 루트 레이아웃
│   ├── page.tsx              # 메인 페이지
│   └── page.module.css       # 메인 페이지 스타일
├── components/
│   ├── ChatInput.tsx         # 채팅 입력 컴포넌트
│   ├── ChatInput.module.css
│   ├── ChatMessage.tsx       # 메시지 표시 컴포넌트
│   └── ChatMessage.module.css
├── user-info.ts              # 사용자 정보 (프롬프트에 포함)
├── package.json
└── tsconfig.json
```

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안전성
- **OpenAI API** - GPT 모델을 사용한 챗봇 응답
- **CSS Modules** - 컴포넌트 스코프 스타일링

## 사용 방법

1. 웹사이트를 열면 챗봇과 대화할 수 있는 인터페이스가 나타납니다.
2. 하단의 입력창에 메시지를 입력하고 Enter 키를 누르거나 전송 버튼을 클릭하세요.
3. 챗봇은 `user-info.ts`에 설정된 정보를 바탕으로 당신에 대해 알고 있는 것처럼 응답합니다.
4. "내 취미가 뭐야?", "내가 좋아하는 음식은?" 같은 질문을 해보세요!

## 커스터마이징

- **스타일 변경**: 각 컴포넌트의 `.module.css` 파일을 수정하세요.
- **모델 변경**: `app/api/chat/route.ts`에서 `model` 파라미터를 변경할 수 있습니다.
- **프롬프트 조정**: `app/api/chat/route.ts`의 `systemPrompt`를 수정하여 챗봇의 응답 스타일을 바꿀 수 있습니다.

## 배포

Vercel을 사용한 배포를 권장합니다:

```bash
npm run build
```

또는 Vercel CLI를 사용:

```bash
npm i -g vercel
vercel
```

배포 전에 환경 변수 `OPENAI_API_KEY`를 설정하는 것을 잊지 마세요!
