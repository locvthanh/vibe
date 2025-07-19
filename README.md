# Password Generator 🔐

A secure and modern password generation tool built with React, TypeScript, and modern web technologies. Generate strong, customizable passwords with ease.

## 🌟 Features

- **Secure Password Generation**: Create strong, random passwords with customizable options
- **Real-time Strength Indicator**: Visual feedback on password strength
- **Customizable Options**: Choose length, character types, and symbols
- **Copy to Clipboard**: One-click copying with visual feedback
- **Beautiful UI/UX**: Modern glassmorphism design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Security Tips**: Built-in guidance for creating secure passwords

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
   cd password-generator
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
├── components/              # Reusable UI components
│   ├── Header.tsx          # Navigation header
│   ├── ToolCard.tsx        # Tool display card
│   └── PasswordGenerator.tsx # Main password generator component
├── context/                # React context for state management
│   └── ToolContext.tsx     # Tool data and state
├── pages/                  # Page components
│   ├── Home.tsx            # Main landing page
│   └── ToolPage.tsx        # Individual tool page
├── App.tsx                 # Main app component
├── main.tsx                # Application entry point
└── index.css               # Global styles
```

## 🔐 Password Generator Features

The password generator includes the following features:

- **Length Control**: Adjustable password length from 8 to 64 characters
- **Character Types**: 
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*)
- **Strength Indicator**: Real-time visual feedback on password strength
- **Copy Functionality**: One-click copy to clipboard with confirmation
- **Security Tips**: Built-in guidance for creating secure passwords

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
- Focused on providing secure password generation
- Special thanks to the open-source community

---

**Password Generator** - Your secure password creation tool 🔐
