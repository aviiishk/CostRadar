# 📊 CostRadar

CostRadar is a modern web application built with Next.js to track, analyze, and monitor cost-related data using automated crawling, a real-time backend, and email notifications.

🌐 **Live Demo:** https://costradar.vercel.app/

---

## ✨ Features

- 🔍 Automated data fetching using Firecrawl  
- 🗄️ Realtime backend and database with Supabase  
- 🔐 Google Authentication (OAuth)  
- 📧 Email notifications powered by Resend  
- ⚡ Built with Next.js App Router and React  
- 🔒 Secure environment-based configuration  

---

## 🛠️ Tech Stack

- Next.js  
- React  
- Supabase (Database + Auth)  
- Resend (Emails)  
- Firecrawl (Data Crawling)  
- CSS / PostCSS  

---

## 📁 Project Structure

CostRadar/
- app/ – Next.js routes and layouts  
- components/ – Reusable UI components  
- lib/ – API clients and integrations  
- utils/supabase/ – Supabase helpers  
- public/ – Static assets  
- proxy.js – Proxy configuration  

---

## 🔐 Authentication

- Google OAuth authentication powered by Supabase
- Secure sign-in and session handling
- Easily extendable to support more providers

---

## ⚙️ Environment Variables

Create a `.env` file and add:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url  
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key  

RESEND_API_KEY=your_resend_api_key  
EMAIL_FROM=your_verified_email  

FIRECRAWL_API_KEY=your_firecrawl_api_key  

---

## 🚀 Getting Started

1. Clone the repository  
git clone https://github.com/aviiishk/CostRadar.git  

2. Install dependencies  
npm install  

3. Run the development server  
npm run dev  

Open http://localhost:3000

---

## 📬 Email Notifications

Resend is used to send cost alerts and notifications to users.

---

## 🕷️ Data Crawling

Firecrawl fetches and structures external data before storing it in Supabase.

---

## 👨‍💻 Author

Abhishek (aviiishk)

---

## 📄 License

MIT License
