# Zooh! Designs - React Login Screen

A beautiful, modern mobile login screen for a zoo/wildlife app called "Zooh! Designs". Built with React and featuring a gradient blue background, iOS-style status bar, and smooth animations.

## Project Structure

```
src/
├── components/
│   ├── LoginScreen.js      # Main container component
│   ├── StatusBar.js        # Mobile status bar (time, signal, wifi, battery)
│   ├── LogoCard.js         # Zooh! logo card
│   ├── LoginCard.js        # Login form with email/password inputs
│   └── HomeIndicator.js    # iOS home indicator bar
├── styles/
│   └── LoginScreen.css     # All styling (variables, layout, animations)
├── App.js                  # Main app component
├── App.css                 # App container styles
├── index.js                # React entry point
└── index.css               # Global styles and CSS variables
public/
└── index.html              # HTML template with Font Awesome CDN
```

## Features

✅ **Mobile Design** - Responsive mobile-first layout (400px wide)
✅ **Status Bar** - Shows time (9:41), signal, wifi, battery icons
✅ **Gradient Background** - Blue gradient with subtle wildlife emoji overlays (lion & giraffe)
✅ **Logo Card** - White card with paw icon and "Zooh!" branding
✅ **Login Form**
  - Email input with envelope icon
  - Password input with eye toggle for visibility
  - Remember me checkbox (custom styled)
  - Forgot password link

✅ **Log In Button** - Red gradient with hover animations
✅ **Divider** - "Or" text with horizontal lines
✅ **Social Login**
  - Google login button with colored icon
  - Facebook login button with colored icon
  - Subtle borders and shadows

✅ **Home Indicator** - iOS-style bottom bar
✅ **Animations** - Slide-up entrance animations, smooth transitions
✅ **Interactive Elements** - Password visibility toggle, form validation, click handlers

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Technologies Used

- **React 18** - UI library
- **CSS3** - Styling with CSS variables and gradients
- **Font Awesome 6** - Icon library
- **React Scripts** - Build tooling

## Styling

The app uses CSS variables for easy theming. Modify colors in `src/index.css` under the `:root` selector:

```css
:root {
    --primary-blue-start: #1e5a96;
    --primary-blue-end: #2d8ebd;
    --accent-red: #e74c3c;
    /* ... other variables */
}
```

## Component Breakdown

### LoginScreen.js
Main container that orchestrates all sub-components and provides the layout structure.

### StatusBar.js
Displays mobile status information including time and system icons.

### LogoCard.js
Renders the Zooh! branding with paw icon.

### LoginCard.js
Handles all login form logic including:
- Email/password input state management
- Password visibility toggle
- Remember me checkbox
- Form submission
- Social login button handlers

### HomeIndicator.js
Renders the iOS-style home indicator bar.

## Interactive Features

- **Password Toggle**: Click the eye icon to show/hide password
- **Remember Me**: Custom checkbox styling with smooth transitions
- **Form Validation**: Email and password fields are required
- **Social Login**: Buttons have hover animations and state feedback
- **Responsive**: Adapts to different screen sizes

## License

This project is part of the BBW 5IA24b Module 322 curriculum.
