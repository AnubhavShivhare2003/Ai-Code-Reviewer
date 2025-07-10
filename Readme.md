# AI Code Reviewer

A modern web application that provides intelligent code review using Google's Gemini AI. Built with React frontend and Node.js backend, this tool helps developers improve their code quality by providing detailed, professional code reviews.

## 🌐 Live Demo

- **Frontend**: [https://ai-code-reviewer-eight-liard.vercel.app/](https://ai-code-reviewer-eight-liard.vercel.app/)
- **Backend**: [https://ai-code-reviewer-rhrk.onrender.com](https://ai-code-reviewer-rhrk.onrender.com)

## ✨ Features

- **Real-time Code Editing**: Syntax-highlighted code editor with support for JavaScript
- **AI-Powered Code Review**: Professional code analysis using Google Gemini 2.5 Flash
- **Comprehensive Feedback**: Detailed reviews covering:
  - Code quality and maintainability
  - Best practices and industry standards
  - Performance optimization suggestions
  - Security vulnerability detection
  - Error handling improvements
  - Code structure and readability
- **Loading States**: User-friendly loading indicators during AI processing
- **Markdown Rendering**: Rich formatting for AI responses with syntax highlighting
- **Responsive Design**: Modern, clean UI with excellent user experience

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API requests
- **React Simple Code Editor** - Code editing component
- **Prism.js** - Syntax highlighting
- **React Markdown** - Markdown rendering
- **CSS3** - Custom styling with animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Google Gemini AI** - AI-powered code review
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-code-reviewer
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   ```

5. **Start the Backend Server**
   ```bash
   cd backend
   node server.js
   ```
   The backend will start on `http://localhost:3000`

6. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will start on `http://localhost:5173`

## 📁 Project Structure

```
ai-code-reviewer/
├── frontend/
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── App.css          # Styles
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── app.js           # Express app configuration
│   │   ├── controllers/
│   │   │   └── ai.controller.js    # AI review endpoint
│   │   ├── routes/
│   │   │   └── ai.routes.js        # API routes
│   │   └── services/
│   │       └── ai.service.js       # Gemini AI integration
│   ├── server.js            # Server entry point
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### POST `/ai/get-review`
Analyzes and reviews the provided code.

**Request Body:**
```json
{
  "code": "function example() { return 'hello world'; }"
}
```

**Response:**
Returns a detailed code review in markdown format.

## 🎯 How It Works

1. **Code Input**: Users write or paste their code in the syntax-highlighted editor
2. **AI Analysis**: Click "Review" to send the code to Google Gemini AI
3. **Professional Review**: The AI analyzes the code using a comprehensive system prompt designed for senior-level code review
4. **Detailed Feedback**: Receive detailed feedback covering code quality, best practices, performance, security, and improvements
5. **Formatted Output**: View the review in beautifully formatted markdown with syntax highlighting

## 🔒 Security

- API keys are stored securely using environment variables
- CORS is properly configured for cross-origin requests
- Input validation is implemented on the backend

## 🚀 Deployment

### Frontend (Vercel)
- Connected to GitHub repository
- Automatic deployments on push to main branch
- Environment variables configured in Vercel dashboard

### Backend (Render)
- Connected to GitHub repository
- Automatic deployments on push to main branch
- Environment variables configured in Render dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Google Gemini AI for providing the intelligent code review capabilities
- The React and Node.js communities for excellent documentation and tools
- Vercel and Render for hosting services

---

**Happy Coding! 🚀** 
