// Import necessary hooks and components from React
import { useEffect, useState } from 'react'

// Import custom components to display workout details and the workout form
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

// Define the Home component
const Home = () => {
    // Declare a state variable "workouts" to hold the list of workouts
    // "setWorkouts" is the function used to update the state
    // Initially, "workouts" is set to null (no data)
    const [workouts, setWorkouts] = useState(null)

    // useEffect hook to fetch data from the server when the component is first rendered
    useEffect(() => {
        // Define an asynchronous function to fetch workouts from the API
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts') // Send a GET request to the API
            const json = await response.json() // Parse the response as JSON

            // If the request is successful, update the "workouts" state with the received data
            if (response.ok) {
                setWorkouts(json) // Update the state with the fetched workouts
            }
        }

        // Call the fetchWorkouts function to get the workouts data
        fetchWorkouts()
    }, []) 
    // The empty array "[]" means this effect runs only once, when the component is mounted

    // Return the JSX structure for rendering the Home component
    return (
        <div className="home">
            <div className='workouts'>
                {/* If "workouts" is not null, map through the array and render a WorkoutDetails component for each workout */}
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            {/* Render the WorkoutForm component to allow users to add a new workout */}
            <WorkoutForm />
        </div>
    )
}

// Export the Home component so it can be used in other parts of the application
export default Home
