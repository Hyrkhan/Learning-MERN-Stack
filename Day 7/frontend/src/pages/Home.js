// Importing the useEffect hook from React to handle side effects in the component
import { useEffect } from 'react';

// Importing the custom hook useWorkoutContext to access the workout state and dispatch function
import { useWorkoutContext } from '../hooks/useWorkoutsContext';

// Importing components to display workout details and a form to add new workouts
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

/*
 * The Home component is responsible for fetching workouts from the API 
 * and displaying them using the WorkoutDetails component.
 */
const Home = () => {
    // Extracting the workouts state and the dispatch function from the context
    const { workouts, dispatch } = useWorkoutContext();

    // useEffect is used to perform side effects in the component (fetching workouts here)
    useEffect(() => {
        // Defining an async function to fetch workouts from the API
        const fetchWorkouts = async () => {
            // Fetching workouts data from the backend API
            const response = await fetch('http://localhost:4000/api/workouts');
            
            // Parsing the response data as JSON
            const json = await response.json();

            // If the API call is successful, dispatch an action to set the workouts in the global state
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        };

        // Calling the function to fetch the workouts when the component mounts
        fetchWorkouts();

    }, [dispatch]); // Adding dispatch as a dependency to avoid stale closures

    // Returning the JSX that renders the Home component
    return (
        <div className="home">
            {/* Displaying the list of workouts if workouts are available in the state */}
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    // Rendering a WorkoutDetails component for each workout
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            {/* Rendering the WorkoutForm component for adding new workouts */}
            <WorkoutForm />
        </div>
    );
}

export default Home;
