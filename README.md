# Online Shopping Mall

A full-stack e-commerce application built with React and Express.

## Features

- Product browsing and searching
- Shopping cart management
- User authentication
- Order processing
- Checkout system
- Responsive design

## Tech Stack

### Frontend
- React
- Vite
- CSS3
- React Router

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/raghu62-rp/online-shopping-mall.git
cd online-shopping-mall
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables
Create `.env` file in backend directory with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the application
```bash
# Start backend (from backend directory)
npm run dev

# Start frontend (from frontend directory)
npm run dev
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.