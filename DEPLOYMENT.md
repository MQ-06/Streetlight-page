# 🚀 Deployment Guide - StreetLight Platform

This guide covers deploying your StreetLight platform to various hosting providers.

---

## ☁️ Vercel (Recommended)

Vercel is the easiest way to deploy Next.js apps.

### Method 1: Deploy from GitHub

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/streetlight-platform.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add any variables from `.env.example`

4. **Done!** Your site is live at `https://your-project.vercel.app`

### Method 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 🌐 Netlify

### Deploy from Git

1. **Push code to GitHub/GitLab/Bitbucket**

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

4. **Deploy!**

### Deploy with Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## 🚂 Railway

Railway offers simple deployment with great developer experience.

1. **Push code to GitHub**

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway auto-detects Next.js

3. **Configure**
   - Add environment variables in Settings
   - Railway automatically handles build and deployment

4. **Get your URL**
   - Railway provides a free `railway.app` subdomain
   - Add custom domain in Settings

---

## 🐳 Docker Deployment

### Create Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Deploy with Docker

```bash
# Build image
docker build -t streetlight-platform .

# Run container
docker run -p 3000:3000 streetlight-platform
```

---

## ☁️ AWS Amplify

1. **Push to GitHub**

2. **Deploy on Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect GitHub repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

3. **Deploy and get URL**

---

## 🌍 Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS with your provider:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`

### Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS:
   - Add CNAME: `www` → `your-site.netlify.app`
   - Add A record: `@` → Netlify's IP

---

## 🔐 Environment Variables

For production, set these variables:

```bash
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NODE_ENV=production
```

Add them in your hosting provider's dashboard under Environment Variables or Settings.

---

## 📊 Performance Optimization

### Before Deploying

1. **Optimize Images**
   - Use Next.js `<Image>` component
   - Compress images with tools like TinyPNG

2. **Enable Compression**
   - Vercel/Netlify enable this automatically
   - For custom servers, enable gzip/brotli

3. **Configure Caching**
   ```javascript
   // next.config.js
   const nextConfig = {
     images: {
       formats: ['image/avif', 'image/webp'],
     },
   }
   ```

4. **Analyze Bundle**
   ```bash
   npm install @next/bundle-analyzer
   ```

---

## 🔍 Monitoring

### Add Analytics

- **Vercel Analytics**: Built-in, enable in dashboard
- **Google Analytics**: Add to `app/layout.tsx`
- **Plausible**: Privacy-friendly alternative

### Error Tracking

- **Sentry**: For error monitoring
- **LogRocket**: Session replay and debugging

---

## 🛠️ CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

---

## 📝 Pre-Deployment Checklist

- [ ] Test build locally (`npm run build`)
- [ ] Check for console errors
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Set environment variables
- [ ] Configure custom domain (if applicable)
- [ ] Set up SSL certificate (usually automatic)
- [ ] Add analytics
- [ ] Test all links and buttons
- [ ] Check SEO metadata
- [ ] Enable error tracking

---

## 🆘 Troubleshooting

### Build Fails

- Clear cache: `rm -rf .next node_modules && npm install`
- Check Node version (must be 18+)
- Review error logs in hosting dashboard

### 404 Errors

- Ensure `app/page.tsx` exists
- Check `next.config.js` for basePath issues

### Slow Performance

- Enable caching headers
- Optimize images
- Use `next/image` component
- Check Lighthouse scores

---

## 📞 Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- Create an issue on GitHub

---

🇵🇰 **Ready to bring transparency to Pakistan's cities!**

