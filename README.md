# Vibe AI Hub ✨

A creative and modern web application that serves as an entry point for all AI tools. Built with React, TypeScript, and modern web technologies.

## 🌟 Features

- **Beautiful UI/UX**: Modern glassmorphism design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Tool Discovery**: Browse and search through various AI tools by category
- **Dynamic Routing**: Individual pages for each AI tool with detailed information
- **Real-time Search**: Instant search functionality across all tools
- **Status Indicators**: Visual indicators for tool status (Active, Beta, Coming Soon)
- **Smooth Animations**: Powered by Framer Motion for delightful interactions

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vibe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── ToolCard.tsx    # Tool display card
├── context/            # React context for state management
│   └── ToolContext.tsx # AI tools data and state
├── pages/              # Page components
│   ├── Home.tsx        # Main landing page
│   └── ToolPage.tsx    # Individual tool page
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Adding New AI Tools

To add a new AI tool, update the `defaultTools` array in `src/context/ToolContext.tsx`:

```typescript
{
  id: 'your-tool-id',
  name: 'Your AI Tool Name',
  description: 'Brief description of your tool',
  category: 'Tool Category',
  icon: '🎯',
  color: 'primary', // or 'secondary'
  status: 'active', // 'active', 'beta', or 'coming-soon'
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  url: '/tool/your-tool-id'
}
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.js` and can be extended as needed.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (recommended)

### Best Practices
- Use TypeScript interfaces for type definitions
- Implement proper error boundaries
- Follow React hooks best practices
- Use semantic HTML elements

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ using modern web technologies
- Inspired by the need for a centralized AI tools hub
- Special thanks to the open-source community

---

**Vibe AI Hub** - Your creative entry point to all AI tools ✨
