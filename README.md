# Arvin Ghafrizaadeh - CV Portfolio

A professional CV website built with Next.js, TypeScript, and Tailwind CSS showcasing AI Engineering and Systems Architecture expertise.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see your CV.

## 📋 Features

- **Professional Design**: Modern, clean layout with professional styling
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast**: Built with Next.js for optimal performance
- **Accessible**: Semantic HTML and proper contrast ratios

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main CV page
│   └── globals.css      # Global styles
└── components/
    ├── Header.tsx       # Personal info & contact
    ├── Skills.tsx       # Skills & technologies
    ├── Education.tsx    # Education background
    ├── Experience.tsx   # Professional experience
    ├── Projects.tsx     # Selected projects
    └── Contact.tsx      # Contact information
```

## 🎨 Customization

### Colors
The color scheme uses a blue primary palette. You can customize colors in `tailwind.config.js`.

### Content
Update your personal information in the respective components:
- Personal details in `src/components/Header.tsx`
- Skills in `src/components/Skills.tsx`
- Education in `src/components/Education.tsx`
- Experience in `src/components/Experience.tsx`
- Projects in `src/components/Projects.tsx`

### Styling
Global styles are in `src/app/globals.css`. Component-specific styles use Tailwind classes.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
The app can be deployed to Netlify, GitHub Pages, or any static hosting service:

```bash
npm run build
```

Upload the `out` folder to your hosting provider.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Arvin Ghafrizaadeh**
