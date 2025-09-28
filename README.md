# SkyEase ☁️

SkyEase is a modern, responsive weather application built with React that provides real-time weather information for cities worldwide. With a clean and intuitive interface, users can easily search for weather conditions in any location and view detailed meteorological data.

![SkyEase Application](https://github.com/user-attachments/assets/e2ed4ece-3033-4a68-bb1d-c44ce96e7ea2)

## ✨ Features

- **Real-time Weather Data**: Get current weather information for any city worldwide
- **Comprehensive Weather Details**: View temperature, humidity, feels-like temperature, min/max temperatures
- **Weather Icons**: Visual representation of weather conditions with dynamic icons
- **Responsive Design**: Beautiful, mobile-friendly interface with Tailwind CSS
- **Error Handling**: User-friendly error messages for invalid city searches
- **Clean UI**: Modern design using Material-UI components

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: 
  - Tailwind CSS 4.1.12
  - Material-UI (MUI) 7.3.1
- **Weather API**: OpenWeatherMap API
- **Code Quality**: ESLint with React-specific rules
- **Language**: JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nitesh-888/SkyEase.git
   cd SkyEase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up OpenWeatherMap API**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) to get your free API key
   - The application currently uses a demo API key, but for production use, you should replace it with your own key in `src/components/SearchBox/SearchBox.jsx`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173/`
   - The application should now be running!

## 📖 Usage

1. **Search for Weather**: Enter any city name in the search box
2. **View Results**: Weather information will be displayed in the info box, including:
   - Current temperature
   - Minimum and maximum temperatures
   - "Feels like" temperature
   - Humidity level
   - Weather description
   - Weather icon

## 🏗️ Project Structure

```
SkyEase/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   │   ├── broken_cloud.jpg
│   │   └── react.svg
│   ├── components/        # React components
│   │   ├── InfoBox/       # Weather information display
│   │   ├── SearchBox/     # City search input
│   │   ├── WeatherApp/    # Main app component
│   │   └── LikeBtn.jsx    # Additional component
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 🔧 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server at `http://localhost:5173/`

### `npm run build`
Builds the app for production to the `dist` folder

### `npm run preview`
Serves the production build locally for testing

### `npm run lint`
Runs ESLint to check for code quality issues

## 🌐 API Integration

This application uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data. The API provides:

- Current weather conditions
- Temperature data (current, min, max, feels-like)
- Humidity levels
- Weather descriptions and icons

**Note**: The application includes a demo API key for testing purposes. For production deployment, please:
1. Register at OpenWeatherMap
2. Get your personal API key
3. Replace the API key in `src/components/SearchBox/SearchBox.jsx`

## 🎨 Styling

The application uses a combination of:
- **Tailwind CSS**: For utility-first styling and responsive design
- **Material-UI**: For pre-built React components (TextField, Button, Card, etc.)
- **Custom CSS**: Additional styling in `src/index.css`

The color scheme features a beautiful cyan background (`bg-cyan-200`) with clean, modern component styling.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [React](https://reactjs.org/) for the amazing frontend framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Material-UI](https://mui.com/) for the beautiful React components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
