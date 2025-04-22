
# PrepByte – AI-Powered Real-Time Interview Companion

<div align="center">
  <img src="public/prepbyte-logo.gif" alt="PrepByte Logo" width="100%" />
</div>

## Overview

**PrepByte** is your intelligent, real-time AI interview assistant built to empower candidates and help companies scale interview processes. With a dynamic, voice-interactive interface, PrepByte offers personalized interview experiences, real-time analysis, and detailed feedback, all powered by advanced AI.

![PrepByte Preview](./public/prepbyte-preview.png)

Whether you're preparing for your dream role or automating hiring workflows, PrepByte brings the future of interviews to your fingertips.

### PrepByte is designed to:
- Help **candidates** practice interviews in a real-world-like environment
- Enable **recruiters** to streamline and standardize evaluations
- Empower **organizations** to make data-driven hiring decisions

## 🚀 Key Features

- **Conversational AI Interviews** – Voice-based sessions with natural conversation flow
- **Instant Feedback Engine** – Real-time evaluation of answers using AI
- **Role-Based Interviews** – Tailored questions by domain, stack, and experience level
- **Score Breakdown** – In-depth candidate scoring across technical, behavioral, and communication dimensions
- **Secure User Accounts** – Email-based authentication & account management
- **Interview History** – Access, review, and analyze previous sessions
- **Fully Responsive UI** – Optimized for desktop and mobile use

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **AI & Voice**:
  - Google Gemini for response analysis
  - Vapi AI for live voice communication
  - Vercel AI SDK for real-time interactions
- **Forms**: React Hook Form + Zod
- **UI Framework**: Radix UI with custom components
- **Notifications**: Sonner

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v18+)
- Firebase account with Firestore & Auth enabled
- API Keys for Google Gemini and Vapi

### Installation Steps

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/prepbyte.git
   cd prepbyte
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with:

   ```env
   # Firebase
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # AI APIs
   GOOGLE_API_KEY=your_google_api_key
   VAPI_API_KEY=your_vapi_api_key
   ```

4. Run the app locally:

   ```bash
   npm run dev
   ```

5. Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
prepbyte/
├── app/                  # Application routes (Next.js App Router)
│   ├── (auth)/           # Auth routes
│   ├── (interview)/      # Core interview routes
│   └── layout.tsx        # Root layout
├── components/           # Reusable React components
├── constants/            # Static config (roles, tech, feedback schema)
├── firebase/             # Firebase SDK setup
├── lib/                  # Utility functions & server actions
├── public/               # Static assets (logos, previews)
├── types/                # TypeScript definitions
└── styles/               # Tailwind and custom styles
```

## 🧠 AI Voice Pipeline

1. The user selects a role or stack
2. The voice `Agent` initiates and handles live Q&A
3. Responses are transcribed in real time
4. Gemini AI evaluates performance across metrics
5. The system returns structured feedback

## 🔧 Customization Guide

### Add a New Interview Role
- Update the list in `constants/index.ts`
- Adjust the prompt logic in `app/api/vapi/generate/route.ts`

### Modify Feedback Metrics
- Tweak the evaluation criteria in `lib/actions/general.action.ts`
- Sync feedback schema changes in `constants/index.ts`

### Add a Tech Stack
- Drop icons into `public/`
- Map them in `constants/index.ts`

## ☁️ Deployment on Vercel

1. Push to a GitHub repo
2. Import project into [Vercel](https://vercel.com)
3. Configure `.env` variables
4. Deploy!

## 🔮 What’s Coming

- 🎙️ Video Interview Mode
- 🌍 Multi-language AI support
- 📊 Recruiter Dashboard & Analytics
- 🧩 ATS Integration
- 📱 Mobile App (iOS + Android)
- 🎯 Custom Templates by Role/Industry

## 🤝 Contributing

We welcome your PRs!  
1. Fork the repo  
2. Create a feature branch: `git checkout -b feat/your-feature`  
3. Make changes & commit  
4. Push & open a PR

## 📄 License

MIT © 2025 PrepByte. Feel free to adapt or build on top of it.

---

Crafted with ❤️ using Next.js, Firebase, Vapi, and Gemini AI  
_© 2025 PrepByte by Ashutosh Mohanty_