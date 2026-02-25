# Madarsa Furqania Gonda (مدرسہ فرقانیہ گونڈہ)

A modern web application built for Madarsa Furqania Gonda, providing comprehensive information about the madrasa's departments, courses, ongoing activities, and donation details.

## Features

- **Multi-language Support:** Integrated with Google Translate to seamlessly translate the entire website into Urdu (اردو), Arabic (العربية), English, and Hindi (हिंदी).
- **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop viewing.
- **Information Hub:** Detailed sections for Introduction, Pillars of Islam, Madrasa Activities, and Available Courses (Tahfeez-ul-Quran, Tajweed And Qira't, Persian And Deeniyat, Modern Education).
- **Gallery & Certificates:** Display for photo gallery and FCRA / 12AA / 80G certificates.
- **Modern UI:** Built with Tailwind CSS and Lucide React icons for a clean, intuitive, and accessible user interface.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Navigate to the project directory:

   ```bash
   cd madarsa_mahmoodia
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm run dev
```

The application will be available at according to the terminal output (typically `http://localhost:3000` or `http://localhost:5173`).

### Building for Production

To create a production build:

```bash
npm run build
```

This will generate a `dist` folder with optimized static assets.

## Project Structure

- `index.html`: Main HTML file with Google Translate integration.
- `src/App.tsx`: Main application component containing all the visual sections.
- `src/main.tsx`: React application entry point.
- `package.json`: Project dependencies and scripts.
