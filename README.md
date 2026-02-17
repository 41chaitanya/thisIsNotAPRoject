# 💕 Valentine's Day Card

A beautiful, interactive Valentine's Day card built with React, Three.js, and GSAP.

## Features

- 🎨 Beautiful pink gradient theme
- 💖 Animated floating hearts background (Three.js)
- ✨ Smooth animations (GSAP & Framer Motion)
- 📱 Fully responsive (mobile optimized)
- 🏃 "No" button runs away from mouse/touch
- 📧 Email notification when "Yes" is clicked
- ⏳ Loading screen with message

## Tech Stack

- React 18
- Three.js (3D hearts animation)
- GSAP (animations)
- Framer Motion (UI animations)
- FormSubmit (email notifications)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Email Setup

The app uses FormSubmit for email notifications. First-time setup:
1. Open `test-email.html` in browser
2. Click "Send Activation Email"
3. Check email and click activation link
4. Done! Future "Yes" clicks will send emails automatically

## License

MIT
