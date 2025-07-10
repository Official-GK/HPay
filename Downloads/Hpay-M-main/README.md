# Hpay Homepage

This directory contains the frontend application for the Hpay project - a modern financial services dashboard and payment platform built with React and TypeScript.

## What's in this directory?

This is a complete React-based web application that serves as the main homepage/dashboard for the Hpay platform. The application includes:

### Core Features
- **Financial Dashboard**: Balance display, transaction history, and financial analytics
- **Service Grid**: Quick access to various payment and financial services
- **Interactive Charts**: Data visualization using Recharts for financial metrics
- **Transaction Management**: View and manage payment transactions
- **Additional Services**: Extended financial services and utilities

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── Header.tsx      # Main navigation header
│   ├── BalanceCard.tsx # Account balance display
│   ├── ServiceGrid.tsx # Service selection grid
│   ├── ChartCard.tsx   # Chart container components
│   ├── LineChart.tsx   # Data visualization charts
│   └── ...             # Other UI components
├── pages/              # Page components
│   ├── Index.tsx       # Main dashboard page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
└── main.tsx           # Application entry point
```

## Technologies Used

### Core Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.1** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Headless UI primitives for building accessible components
- **Lucide React** - Beautiful, customizable icons
- **Tailwind CSS Animate** - Animation utilities

### State Management & Data Fetching
- **TanStack React Query 5.56.2** - Server state management and caching
- **React Hook Form 7.53.0** - Performant forms with validation
- **Zod 3.23.8** - TypeScript-first schema validation

### Routing
- **React Router DOM 6.26.2** - Client-side routing

### Data Visualization
- **Recharts 2.12.7** - Composable charting library for React
- **Embla Carousel React 8.3.0** - Touch-friendly carousel component

### Additional Libraries
- **date-fns 3.6.0** - Modern JavaScript date utility library
- **clsx & class-variance-authority** - Conditional styling utilities
- **Sonner 1.5.0** - Toast notifications
- **Next Themes 0.3.0** - Theme management
- **React Day Picker 8.10.1** - Date picker component

### Development Tools
- **ESLint 9.9.0** - Code linting and formatting
- **PostCSS & Autoprefixer** - CSS processing
- **SWC** - Fast TypeScript/JavaScript compiler

## Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation & Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

The development server will start at `http://localhost:5173` with hot module replacement enabled.

## Project Features

### Responsive Design
The application is fully responsive and optimized for desktop, tablet, and mobile devices using Tailwind CSS breakpoints.

### Modern UI/UX
- Clean, modern interface using shadcn/ui components
- Smooth animations and transitions
- Accessible design following WCAG guidelines
- Dark/light theme support

### Performance Optimized
- Fast build times with Vite
- Code splitting and lazy loading
- Optimized bundle size
- Efficient state management with React Query

## Deployment

This project can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.) or containerized for cloud deployment.

### Build Output
The build process creates optimized static files in the `dist/` directory that can be served by any web server.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is part of the Hpay platform and follows the project's licensing terms.
