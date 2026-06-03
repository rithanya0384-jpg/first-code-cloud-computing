# CloudHub - Modern 3D Cloud Information Website

A beautiful, modern website showcasing cloud computing information, different cloud types, and leading cloud service providers. Built with React, Vite, and TailwindCSS for easy deployment on Vercel.

## Features

- **Home Page**: Overview of CloudHub with navigation to other sections
- **Clouds Page**: Information about different cloud types and cloud service providers (both paid and free)
- **Learn Page**: Comprehensive educational content about cloud computing
- **Modern Design**: Clean UI with gradient backgrounds and glass-morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance
- **Easy Deployment**: Ready to deploy on Vercel with zero configuration

## Cloud Providers Included

### Paid Providers
- Amazon Web Services (AWS)
- Microsoft Azure
- Google Cloud Platform (GCP)
- Vercel

### Free Providers
- Render
- Heroku
- Firebase
- Netlify

## Cloud Types Explained

- **Cumulus Clouds**: Puffy, white clouds indicating fair weather
- **Stratus Clouds**: Low, gray, uniform clouds covering the sky
- **Cirrus Clouds**: Thin, wispy clouds made of ice crystals
- **Cumulonimbus Clouds**: Powerful storm clouds producing severe weather

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Cloud_Code
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete the deployment.

### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically detect that this is a Vite project and configure the build settings correctly.

### Option 3: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Other" and provide your Git repository URL
4. Click "Deploy"

## Project Structure

```
Cloud_Code/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CloudCard.jsx
│   │   └── ProviderCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Clouds.jsx
│   │   └── Learn.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Three.js**: 3D graphics (ready for future enhancements)

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Content
Edit the page files in `src/pages/` to modify content.

### Components
Reusable components are in `src/components/`.

## Performance

- Optimized bundle size with Vite
- CSS minification with TailwindCSS
- Responsive images and lazy loading ready
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue in the repository.

---

**CloudHub** - Explore the cloud, understand the future.
