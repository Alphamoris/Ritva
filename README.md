# User Directory App

A responsive React application that fetches and displays user data from an API with a clean and modern UI.

## Features

- Fetches user data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- Displays user information in a responsive card layout
- Search functionality to filter users by name
- Loading state with spinner while fetching data
- Error handling with user-friendly messages
- Mobile-responsive design

## Technologies Used

- React (Functional Components & Hooks)
- CSS with modern styling techniques (CSS Variables, Flexbox, Grid)
- Fetch API for data retrieval

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/your-username/user-directory.git
cd user-directory
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

```
npm run build
```

This will create an optimized production build in the `build` folder.

## Deployment

The app can be easily deployed to services like Vercel or Netlify.

## Project Structure

```
user-directory/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Styles for the application
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
└── package.json        # Project dependencies and scripts
```

## Developed By

This application was created by Alphamoris.

## License

MIT
