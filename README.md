# 🌾 Deméter - Agricultural Technology Platform

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red)
![Version](https://img.shields.io/badge/Version-0.1.0-blue)

**Revoluciona la agricultura con tecnología avanzada**

[Features](#-key-features) • [Installation](#-installation) • [Usage](#-usage)

</div>

---

## ✨ Introduction

**Deméter** is an advanced agricultural technology platform designed to transform farming through automation, data collection, and intelligent management systems. The platform empowers farmers with real-time monitoring, AI-powered insights, and comprehensive farm management tools to optimize crop production, reduce resource consumption, and promote sustainable agricultural practices.

### Key Features

- 🗺️ **Farm Management System** - Interactive map visualization with zone-based monitoring
- 📊 **Real-time Data Collection** - Sensor integration for temperature, humidity, and nutrient levels
- 🤖 **AI-Powered Chatbot** - Agricultural guidance and recommendations (Designed for ChatGPT integration)
- 📱 **Responsive Design** - Modern, user-friendly interface accessible on all devices
- 🌱 **Sustainable Practices** - Tools to minimize environmental impact and promote eco-friendly farming

---

## 🚀 Technologies Used

### Frontend
- **React** 18.3.1 - UI library
- **React Router DOM** 6.25.1 - Client-side routing
- **React Modal** 3.16.1 - Modal components
- **React Icons** 5.2.1 - Icon library
- **Axios** 1.7.3 - HTTP client
- **CSS3** - Styling and animations

### AI & Integration
- **OpenAI API** 4.54.0 - AI chatbot integration (planned)

### Development Tools
- **Create React App** - Development environment
- **React Scripts** 5.0.1 - Build tools
- **Testing Library** - Unit and integration testing

---

## ⚙️ Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/demeter-prototype.git
   cd demeter-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your API keys (if needed).

4. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

---

## 🧩 Project Structure

```
demeter-prototype/
├── public/                 # Static assets
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Components/         # Reusable components
│   │   ├── navbar/        # Navigation component
│   │   └── footer/        # Footer component
│   ├── Pages/             # Page components
│   │   ├── landingPage/   # Landing page
│   │   ├── DemeterMap/    # Farm management map
│   │   ├── DemeterAI/     # AI chatbot
│   │   ├── DemeterMenu/   # Main menu
│   │   ├── CanvasModel/   # Canvas visualization
│   │   └── Profile/        # Profile page
│   ├── Assets/            # Images and media
│   │   └── Img/
│   ├── App.js             # Main app component
│   ├── App.css            # Global styles
│   └── index.js           # Entry point
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── LICENSE                # License file
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

---

## 📖 Usage

### Farm Management System

1. Navigate to `/demeter/map` to access the farm management interface
2. Hover over different zones to view real-time data
3. Click on sensors to check battery levels
4. Use action buttons to water zones, view recommendations, and access statistics

### AI Chatbot

1. Navigate to `/demeter/ai` to access the agricultural chatbot
2. Select a question from the dropdown menu
3. Receive AI-powered recommendations and guidance
4. *Note: Currently uses static responses. ChatGPT API integration planned for future updates.*

### Profile

1. Navigate to `/profile` to view developer information
2. Learn more about the project creator and their background

---

## 🚢 Deployment

### Recommended Platforms

- **Vercel** - Recommended for React applications
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify** - Easy deployment with continuous integration
  ```bash
  npm run build
  # Drag and drop the build folder to Netlify
  ```

- **AWS Amplify** - Scalable cloud deployment
  - Connect your GitHub repository
  - Configure build settings: `npm run build`
  - Set publish directory: `build`

- **Render** - Simple deployment platform
  - Connect repository
  - Build command: `npm install && npm run build`
  - Start command: `serve -s build`

### Environment Variables

Ensure the following environment variables are set in your deployment platform:

- `REACT_APP_API_URL` - API endpoint URL (if applicable)
- `REACT_APP_OPENAI_API_KEY` - OpenAI API key (for future chatbot integration)

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

See `.env.example` for the complete template.

---

## 🤝 Contributing

This is a proprietary project. For collaboration inquiries, please contact the project owner.

---

## 📜 License

**Copyright (c) 2024 Steven Morales Fallas**

All rights reserved. Redistribution, modification, reproduction, sublicensing, or any form of transaction (including commercial, educational, or promotional use) involving this repository, its source code, or derived works is strictly prohibited without the explicit and personal written authorization of the Lead Developer, Steven Morales Fallas.

Unauthorized commercial use, resale, or licensing of this repository or its contents is strictly forbidden and will be subject to applicable legal action.

For full license details, see [LICENSE](LICENSE) file.

---

## 👤 Author

**Steven Morales Fallas**

- Software Developer
- Designer
- Professor
- Entrepreneur

*"Las personas que están lo suficientemente locas como para pensar que pueden cambiar el mundo son las que lo hacen"* - Steve Jobs

---

## 📝 Notes

- This is a prototype/proof-of-concept project
- The AI chatbot currently uses static responses; ChatGPT API integration is planned for future versions
- The farm management system simulates real-time data for demonstration purposes
- For production use, backend API integration would be required

---

## 🔮 Future Enhancements

- [ ] ChatGPT API integration for dynamic AI responses
- [ ] Backend API for real-time sensor data
- [ ] User authentication and authorization
- [ ] Database integration for farm data persistence
- [ ] Mobile application development
- [ ] Advanced analytics and reporting
- [ ] Multi-language support
- [ ] Integration with IoT sensor devices

---

<div align="center">

**Made with ❤️ by Steven Morales Fallas**

[License](#-license) • [Author](#-author) • [Contributing](#-contributing)

</div>
