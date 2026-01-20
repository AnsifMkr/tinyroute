# 🔗 TinyRoute

A premium, full-stack URL Shortener built with the MERN stack (MongoDB, Express, React, Node.js). Convert long, unwieldy links into clean, shareable short URLs with style.

![Tech Stack](https://img.shields.io/badge/MERN-Full%20Stack-blue)

## 🚀 Features
-   **Instant Shortening**: Generate unique short URLs instantly.
-   **Premium UI**: Glassmorphism design with smooth animations.
-   **Responsive**: Looks great on Mobile and Desktop.
-   **Fast Redirection**: Optimized backend for quick redirects.

## 🛠️ Tech Stack
-   **Frontend**: React.js, Vite, Modern CSS
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB Atlas

## 📂 Project Structure
```bash
url-shortener/
├── client/     # React Frontend (TinyRoute)
├── server/     # Node.js Backend (API)
```

## 🏁 Getting Started

### Prerequisites
-   Node.js installed
-   MongoDB Atlas Connection String

### 1. Setup Backend
1.  Navigate to the server directory:
    ```bash
    cd server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure Environment (`.env`):
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    BASE_URL=http://localhost:5000
    ```
4.  Start Server:
    ```bash
    npm run dev
    # Server runs on http://localhost:5000
    ```

### 2. Setup Frontend
1.  Navigate to the client directory:
    ```bash
    cd client
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start React App:
    ```bash
    npm run dev
    # App runs on http://localhost:5174 (or 5173)
    ```

## 🤝 Contributing
Feel free to fork this project and submit valid PRs.

## 📄 License
MIT
