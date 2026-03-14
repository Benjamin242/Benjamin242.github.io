# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 14 and Tailwind CSS.

## Features

- ✨ Modern, clean design with dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Built with Tailwind CSS utility classes
- ⚡ Next.js App Router for optimal performance
- 🎯 TypeScript for type safety
- 📑 Tabbed navigation for Biography, Career, Projects, and Contact sections

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page with tab navigation
│   └── globals.css      # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Biography.tsx    # About/Biography section
│   ├── Career.tsx       # Work experience section
│   ├── Projects.tsx     # Projects showcase
│   └── Contact.tsx      # Contact form and info
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Update Personal Information

Edit the following files to personalize your portfolio:

1. **Hero Section** (`components/Hero.tsx`):
   - Change name and title
   - Update tagline

2. **Biography** (`components/Biography.tsx`):
   - Update your story
   - Modify skills list

3. **Career** (`components/Career.tsx`):
   - Add your work experiences
   - Update achievements

4. **Projects** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Update technologies used

5. **Contact** (`components/Contact.tsx`):
   - Update contact information
   - Add your social media links

### Styling with Tailwind

This project uses Tailwind CSS utility classes. To customize:

- Colors: Modify the gradient colors in `app/page.tsx` and component files
- Spacing: Adjust padding (`p-`, `px-`, `py-`) and margin (`m-`, `mx-`, `my-`) classes
- Typography: Change font sizes (`text-xl`, `text-2xl`, etc.)
- Dark mode: Uses automatic dark mode based on system preferences

### Add New Tabs

To add a new section:

1. Create a new component in the `components/` folder
2. Import it in `app/page.tsx`
3. Add a new tab to the `tabs` array
4. Add the component to the tab content section

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This Next.js app can be easily deployed to:

- **Vercel** (recommended): Connect your GitHub repo at [vercel.com](https://vercel.com)
- **Netlify**: Drag and drop the `.next` folder after building
- **Any Node.js hosting**: Use `npm run build` and `npm start`

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

MIT License - feel free to use this template for your own portfolio!
