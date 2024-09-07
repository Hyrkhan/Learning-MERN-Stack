import  { useWorkoutContext } from '../hooks/useWorkoutsContext'

//date fns
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'

// Define a functional component called WorkoutDetails that takes in a 'workout' object as a prop
const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        // Return a div with the class 'workout-details' to structure the workout information
        <div className="workout-details">
            {/* Display the title of the workout */}
            <h4>{workout.title}</h4>
            {/* Display the load of the workout, in kilograms */}
            <p><strong>Load (kg): </strong>{workout.load}</p>
            {/* Display the number of repetitions for the workout */}
            <p><strong>Reps: </strong>{workout.reps}</p>
            {/* Display the creation date of the workout */}
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}

// Export the WorkoutDetails component so it can be used in other parts of the application
export default WorkoutDetails
