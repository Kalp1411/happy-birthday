# Happy Birthday Wishes - Next.js Project

## Project Overview
This is an animated Happy Birthday Wishes page built with Next.js, featuring stunning animations, confetti effects, floating balloons, and interactive elements.

### Features
- 🎉 Confetti animation with toggle control
- 🎈 Floating balloons animation
- 🎂 Animated birthday cake with candles
- 🎵 Music toggle functionality
- ✨ Particle effects and decorative stars
- 💫 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Beautiful gradient backgrounds

### Tech Stack
- **Framework**: Next.js 16.2.9 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Effects**: React Confetti
- **Icons**: React Icons

### Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure
```
happy-birthday/
├── app/
│   ├── page.tsx           # Main birthday page
│   ├── layout.tsx         # Layout wrapper
│   └── globals.css        # Global styles
├── components/
│   ├── BirthdayCard.tsx   # Flipping birthday card
│   ├── CakeAnimation.tsx  # Animated cake with candles
│   ├── FloatingBalloons.tsx # Balloon animation
│   └── ParticleEffect.tsx # Background particles
├── public/
│   └── birthday-music.mp3 # Birthday music (optional)
└── package.json           # Dependencies
```

### How to Customize

#### Change Birthday Message
Edit [app/page.tsx](app/page.tsx#L80-L82) to modify the main title and message.

#### Add Birthday Music
1. Add an MP3 file to `public/birthday-music.mp3`
2. Click "Play Music" button to enable audio

#### Modify Colors
- Edit gradient colors in [app/page.tsx](app/page.tsx#L54)
- Adjust component colors in individual component files

#### Adjust Animation Speed
- Modify transition durations in Framer Motion components
- Default durations are in milliseconds (e.g., duration: 0.8 = 800ms)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run linter

### Browser Support
- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported
- Safari: ✅ Fully supported
- Mobile browsers: ✅ Fully responsive

### Deployment
Deploy easily to Vercel or any Next.js hosting provider:

```bash
npm run build
```

### Notes
- The birthday music file is optional. If not provided, the music button will attempt to play `/birthday-music.mp3`
- All animations are GPU-accelerated for smooth performance
- The page is fully responsive and works on all device sizes

### Future Enhancements
- Add personalized name display
- Email invitation feature
- Photo gallery integration
- Guest message board
- Timer countdown functionality
- More animation options

### License
MIT
