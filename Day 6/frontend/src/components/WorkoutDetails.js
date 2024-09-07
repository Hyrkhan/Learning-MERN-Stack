// Define a functional component called WorkoutDetails that takes in a 'workout' object as a prop
const WorkoutDetails = ({ workout }) => {
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
            <p>{workout.createdAt}</p>
        </div>
    )
}

// Export the WorkoutDetails component so it can be used in other parts of the application
export default WorkoutDetails
