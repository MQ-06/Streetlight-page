# ⚡ Quick Start Guide

Get StreetLight running in 5 minutes!

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn
- Code editor (VS Code recommended)

---

## 🚀 Setup Steps

### 1. Navigate to Project
```bash
cd streetlight-platform
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

You should see the StreetLight hero section! 🎉

---

## 🎨 Making Changes

### Update Hero Text
Edit `components/Hero/StreetLightHero.tsx`:

```typescript
<h1>Your New Headline</h1>
```

The page auto-reloads with your changes!

### Change Colors
Edit `tailwind.config.js`:

```javascript
colors: {
  streetlight: {
    gold: '#YOUR_COLOR',
  },
}
```

### Add New Page
Create `app/about/page.tsx`:

```typescript
export default function About() {
  return <div>About StreetLight</div>;
}
```

Visit [http://localhost:3000/about](http://localhost:3000/about)

---

## 🏗️ Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

---

## 🚀 Deploy

### Fastest Way - Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts, and you're live!

Or use the [Vercel Dashboard](https://vercel.com/new) to deploy from GitHub.

---

## 📚 Next Steps

1. **Customize the hero** - Make it yours!
2. **Add more pages** - About, Contact, etc.
3. **Plan features** - Check `README.md` for roadmap
4. **Deploy** - Share with the world

---

## ❓ Having Issues?

### Port Already in Use
```bash
# Kill the process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Module Not Found
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 🎯 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Check code quality |

---

## 🇵🇰 Welcome to StreetLight!

You're now ready to build Pakistan's civic reporting platform.

**Questions?** Check the full [README.md](./README.md) or [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Let's bring light to Pakistan's cities! 🚦**

