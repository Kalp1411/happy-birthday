# Happy Birthday Wishes - Next.js Project

An amazing animated Happy Birthday Wishes page with confetti, balloons, cake animations, and interactive features!

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- 🎉 **Confetti Animation** - Toggle confetti on/off
- 📸 **Photo Display** - Beautiful framed photo of the birthday person with animations
- 🎈 **Floating Balloons** - Colorful animated balloons
- 🎂 **Cake Animation** - Beautiful animated birthday cake with candles
- 🎵 **Music Control** - Play/mute birthday music
- ✨ **Particle Effects** - Decorative floating particles
- ⭐ **Animated Stars** - Twinkling stars throughout the page
- 📱 **Responsive Design** - Works on all devices
- 💫 **Smooth Animations** - Powered by Framer Motion

## Tech Stack

- **Next.js 16.2.9** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Confetti** for confetti effects
- **React Icons** for UI icons

## File Structure

```
app/
├── page.tsx              # Main birthday page
├── layout.tsx            # Root layout
└── globals.css           # Global styles

components/
├── BirthdayCard.tsx      # Flipping birthday card component
├── CakeAnimation.tsx     # Animated cake with candles
├── FloatingBalloons.tsx  # Floating balloons animation
├── ParticleEffect.tsx    # Background particle effects
└── PhotoDisplay.tsx      # Photo frame component with decorations

public/
├── birthday-music.mp3    # Birthday music (optional)
└── birthday-photo.jpg    # Birthday person photo (JPG, PNG, or WebP)
```

## CAdd Birthday Photo
1. Add your photo to `public/birthday-photo.jpg`
   - Supports JPG, PNG, or WebP formats
   - Recommended size: 400x400px or larger
   - The photo will be displayed in a beautiful animated frame with decorations

### ustomization Guide

### Change the Message
Edit the title and subtitle in `app/page.tsx` (lines 80-82)

### Add Birthday Music
Place an MP3 file at `public/birthday-music.mp3` and click the "Play Music" button

### Modify Colors
- Main gradient: `app/page.tsx` line 54
- Component colors: Individual component files
- Tailwind classes can be adjusted throughout

### Adjust Animation Speeds
Modify the `duration` and `delay` values in Framer Motion components (measured in seconds)

## Available Commands

```bash
npm run dev       # Development server
npm run build     # Production build
npm start         # Run production server
npm run lint      # Check code quality
```

## Browser Support

✅ Chrome/Edge  
✅ Firefox  
✅ Safari  
✅ Mobile browsers

## Deployment

Deploy to Vercel:
```bash
npm run build
vercel deploy
```

## Tips

- All animations are GPU-accelerated for smooth performance
- The page works offline (except music playback)
- Confetti and animations are performance-optimized
- Responsive design adapts to all screen sizes

Enjoy celebrating! 🎉
"# happy-birthday" 
