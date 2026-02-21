# 🚦 StreetLight Platform

**No Civic Hazard Should Remain in the Dark.**

A citizen-powered civic reporting platform bringing transparency and accountability to Pakistani cities. Report potholes, garbage, broken streetlights, and road hazards with ease.

🇵🇰 **Built in Pakistan, for Pakistan**

---

## 🌟 Features (Planned)

- 📍 **Location-based reporting** - Report civic issues with GPS coordinates
- 📸 **Photo evidence** - Attach images to reports
- 🔔 **Real-time updates** - Track issue status and resolution
- 📊 **Analytics dashboard** - Visualize civic issues by area
- 🏛️ **Government integration** - Direct reporting to relevant authorities
- 👥 **Community engagement** - Vote and comment on issues
- 🔐 **User authentication** - Secure citizen profiles
- 📱 **Mobile responsive** - Works on all devices

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/streetlight-platform.git
   cd streetlight-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
streetlight-platform/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   └── Hero/
│       ├── StreetLightHero.tsx
│       └── index.ts
├── public/                  # Static assets
│   └── favicon.ico
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

---

## 📦 Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build and starts the server.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/streetlight-platform)

### Deploy to Other Platforms

- **Netlify:** Use `npm run build` and set publish directory to `.next`
- **Railway:** Connect GitHub repo and Railway will auto-deploy
- **AWS/Azure:** Use Docker or serverless deployment options

---

## 🎨 Customization

### Update Hero Section

Edit `components/Hero/StreetLightHero.tsx` to customize:
- Text content and messaging
- Colors and styling
- Button actions
- Animations

### Add New Pages

Create new files in the `app/` directory:

```typescript
// app/about/page.tsx
export default function About() {
  return <div>About Page</div>;
}
```

### Modify Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      streetlight: {
        dark: '#0B0F14',    // Change these
        gold: '#F4B942',
      },
    },
  },
}
```

---

## 🧪 Development Workflow

### Run Development Server
```bash
npm run dev
```

### Lint Code
```bash
npm run lint
```

### Type Check
```bash
npx tsc --noEmit
```

---

## 🗺️ Roadmap

### Phase 1: Foundation (Current)
- [x] Landing page with hero section
- [ ] About page
- [ ] Contact form

### Phase 2: Core Features
- [ ] User authentication
- [ ] Issue reporting form
- [ ] Map integration
- [ ] Photo upload

### Phase 3: Community
- [ ] Issue feed/dashboard
- [ ] Voting system
- [ ] Comments
- [ ] User profiles

### Phase 4: Government Integration
- [ ] Admin dashboard
- [ ] API for municipalities
- [ ] Status tracking
- [ ] Notifications

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Contact

**StreetLight Team**
- Website: [streetlight.pk](https://streetlight.pk)
- Email: contact@streetlight.pk
- Twitter: [@StreetLightPK](https://twitter.com/streetlightpk)

---

## 💡 About

**StreetLight** empowers Pakistani citizens to report civic issues and hold authorities accountable. Every report brings light to problems that might otherwise remain in the dark.

**Tagline:** "No Civic Hazard Should Remain in the Dark."

**Mission:** Empowering Communities. Enabling Accountability.

---

🇵🇰 **Made with ❤️ in Pakistan**

