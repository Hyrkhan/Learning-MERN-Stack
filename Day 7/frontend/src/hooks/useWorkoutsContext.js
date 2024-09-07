// Importing the WorkoutsContext from the context file where it's created
import { WorkoutsContext } from "../context/WorkoutContext";

// Importing the useContext hook from React to access context values
import { useContext } from "react";

// Custom hook to access the WorkoutsContext
export const useWorkoutContext = () => {
    // Grabbing the current value of WorkoutsContext
    const context = useContext(WorkoutsContext);

    // Check if the hook is used outside of a proper context provider
    // If there's no context, it throws an error to notify the developer
    if (!context) {
        throw Error('useWorkoutsContext must be used inside a WorkoutContextProvider');
    }

    // Return the context value, which will be accessible when this hook is used
    return context;
};
