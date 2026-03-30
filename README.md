# Shahzaib Mian - AI Digital Twin

AI Digital Twin with Vercel Serverless Function (fixes CORS issues)

## 🚀 Deploy to Vercel - Step by Step

### Step 1: Upload to GitHub
1. Create new repository: https://github.com/new
2. Name: `ai-digital-twin`
3. Upload these files:
   - `index.html`
   - `api/chat.js`
   - `package.json`
   - `README.md`

### Step 2: Deploy on Vercel
1. Go to: https://vercel.com/new
2. Import your GitHub repository
3. **IMPORTANT:** Add Environment Variable:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** Your Anthropic API key (starts with `sk-ant-...`)
4. Click "Deploy"

### Step 3: Done!
Your URL: `https://your-project.vercel.app`

## 📁 File Structure
```
/
├── index.html          # Frontend (React via CDN)
├── api/
│   └── chat.js        # Vercel Serverless Function (API Proxy)
├── package.json
└── README.md
```

## 🔒 Security
- API key is stored as environment variable on Vercel
- Never exposed in browser code
- Serverless function acts as secure proxy

## 💰 Cost
- Vercel: Free
- Anthropic API: ~€0.01-0.05 per conversation
- Monthly: ~€5-20

## 📧 Contact
- LinkedIn: https://www.linkedin.com/in/shahzaib-mian/
- Email: shahzaibmian@icloud.com
