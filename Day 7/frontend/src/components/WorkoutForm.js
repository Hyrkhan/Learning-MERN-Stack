import { useState } from "react"
import { useWorkoutContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const {dispatch} = useWorkoutContext()
    const [title, setTitle] = useState('') 
    const [load, setLoad] = useState('') 
    const [reps, setReps] = useState('') 
    const [error, setError] = useState(null) 
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault() 
        const workout = {title, load, reps}

        const response = await fetch('http://localhost:4000/api/workouts', {
            method: 'POST', // Specify the request method as POST
            body: JSON.stringify(workout), // Convert the workout object to a JSON string
            headers: {
                'Content-Type': 'application/json' // Set the content type to JSON
            }
        })
        
        // Parse the JSON response from the server
        const json = await response.json()

        // Check if the response indicates an error
        if (!response.ok) {
            setError(json.error) // Set the error state to the error message from the server
            setEmptyFields(json.emptyFields)
        }
        
        // If the request was successful
        if (response.ok) {
            // Clear the form fields and reset the error state
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            // Log the response from the server to the console
            setEmptyFields([])
            console.log('New workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    // Return the form element that will capture user input for the workout
    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout Task</h3>

            {/* Input field for the workout title */}
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)} // Update the title state when the input changes
                value={title} // Bind the input value to the title state
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            {/* Input field for the workout load (in kg) */}
            <label>Load (kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)} // Update the load state when the input changes
                value={load} // Bind the input value to the load state
                className={emptyFields.includes('load') ? 'error' : ''}
            />

            {/* Input field for the number of repetitions */}
            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)} // Update the reps state when the input changes
                value={reps} // Bind the input value to the reps state
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            {/* Button to submit the form */}
            <button>Add Workout Task</button>
            
            {/* Display error message if there is an error */}
            {error && <div className="error">{error}</div>}
        </form>
    )
}

// Export the WorkoutForm component so it can be used in other parts of the application
export default WorkoutForm
