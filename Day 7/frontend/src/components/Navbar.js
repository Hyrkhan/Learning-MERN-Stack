// Import the 'Link' component from 'react-router-dom' to handle navigation between different routes
import { Link } from "react-router-dom"

// Define a functional component called Navbar
const Navbar = () => {
    return (
        // Return the header element that will contain the navigation bar
        <header>
            {/* Container div to wrap the content inside the header */}
            <div className="container">
                {/* Link component that navigates to the home page ("/") when clicked */}
                <Link to={"/"}>
                    {/* Display the title of the application */}
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

// Export the Navbar component so it can be used in other parts of the application
export default Navbar
