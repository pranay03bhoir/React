
---

# Media Search Application

A modern React application for searching and collecting photos, videos, and GIFs from multiple media sources. Built with Redux Toolkit for state management and Tailwind CSS for styling.

## Features

- **Multi-Source Media Search**: Search across three different media APIs
    - Photos from Unsplash
    - Videos from Pexels
    - GIFs from Klipy (Tenor alternative)
- **Tab-Based Interface**: Switch seamlessly between Photos, Videos, and GIFs
- **Collection System**: Save favorite media items to a personal collection
- **Local Storage Persistence**: Collections are saved locally in the browser
- **Toast Notifications**: User feedback for actions like adding/removing from collection
- **Responsive Grid Layout**: Adaptive layout for media results
- **Dark Theme**: Modern dark UI design

## Tech Stack

- **React 19.2.0** - UI library
- **Redux Toolkit 2.11.2** - State management
- **React Router DOM 7.13.0** - Client-side routing
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Axios 1.13.5** - HTTP client
- **React Toastify 11.0.5** - Toast notifications

## Project Structure

```
src/
├── api/
│   └── mediaAPI.js           # API service functions
├── components/
│   ├── Navbar.jsx            # Navigation bar
│   ├── SearchBar.jsx         # Search input component
│   ├── Tabs.jsx              # Media type tabs
│   ├── ResultGrid.jsx        # Grid layout for results
│   ├── ResultCard.jsx        # Individual media card
│   └── CollectionCard.jsx    # Collection item card
├── pages/
│   ├── HomePage.jsx          # Main search page
│   └── CollectionPage.jsx    # Saved collection page
├── redux/
│   ├── store.js              # Redux store configuration
│   └── features/
│       ├── searchSlice.js    # Search state management
│       └── collectionSlice.js # Collection state management
├── App.jsx                   # Main app component with routing
└── main.jsx                  # Application entry point
```


## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- API keys for:
    - [Unsplash API](https://unsplash.com/developers)
    - [Pexels API](https://www.pexels.com/api/)
    - [Klipy API](https://klipy.com/)

## Installation

1. Clone the repository:
```shell script
git clone <repository-url>
cd mediaSearch
```


2. Install dependencies:
```shell script
npm install
```


3. Create a `.env` file in the root directory:
```
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_KLIPY_KEY=your_klipy_api_key
```


4. Start the development server:
```shell script
npm run dev
```


The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## API Integration

### Unsplash (Photos)
- Endpoint: `https://api.unsplash.com/search/photos`
- Returns high-quality photos with metadata
- Supports pagination

### Pexels (Videos)
- Endpoint: `https://api.pexels.com/videos/search`
- Returns video results with multiple quality options
- Limited results per page

### Klipy (GIFs)
- Endpoint: `https://api.klipy.com/v2/search`
- Drop-in replacement for Tenor API
- Returns animated GIF results

## State Management

The application uses Redux Toolkit with two main slices:

### Search Slice
Manages search functionality:
- Query string
- Active media type tab
- Search results
- Loading and error states

### Collection Slice
Manages saved items:
- Collection array (synced with localStorage)
- Add/remove/clear actions
- Toast notification triggers

## Features in Detail

### Search Functionality
1. Enter search query in the search bar
2. Select media type (Photos/Videos/GIFs) using tabs
3. Results load automatically when switching tabs
4. Results display in a responsive grid layout

### Collection System
1. Click the "Add to Collection" button on any media item
2. Items are saved to localStorage for persistence
3. Navigate to the Collection page to view saved items
4. Remove items individually or clear entire collection
5. Toast notifications confirm actions

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

Built with Vite for fast development experience:
- Hot Module Replacement (HMR)
- Fast refresh for React components
- Optimized build output
- ESLint integration for code quality

## License

This project is private and not licensed for public use.

## Contributing

This is a personal/educational project. Contributions are not currently accepted.

---
