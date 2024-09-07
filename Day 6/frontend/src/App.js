// Importing essential components from 'react-router-dom' to enable routing in the application
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the Home page component and the Navbar component, which are located in their respective files
import Home from './pages/Home'
import Navbar from './components/Navbar'

/*
 * The main App component which serves as the root component of the application.
 * It is responsible for setting up the router and rendering the Navbar and different page components.
 */
function App() {
  return (
    // The main container for the entire application
    <div className="App">
      {/* BrowserRouter is used to wrap the entire application to enable routing.
          It keeps the UI in sync with the current URL */}
      <BrowserRouter>

        {/* The Navbar component will be displayed on all pages, as it's outside the Routes component */}
        <Navbar />

        {/* A div container for wrapping the page content */}
        <div className='pages'>

          {/* Routes is used to define the different routes in the app */}
          <Routes>

            {/* Route defines a specific route. Here, '/' is the root path that renders the Home component */}
            <Route
              path='/'
              element={<Home />}
            />

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

// Exporting the App component so it can be used in other parts of the application
export default App;
