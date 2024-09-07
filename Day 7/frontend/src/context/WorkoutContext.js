// Importing createContext to create a context and useReducer for state management
import { createContext, useReducer } from 'react';

// Creating a context object for workouts. This will hold the state and dispatch function.
export const WorkoutsContext = createContext();

// Reducer function to handle state updates based on the dispatched action
export const workoutReducer = (state, action) => {
    // Using a switch statement to determine how to update the state based on action types
    switch (action.type) {
        // When action type is 'SET_WORKOUTS', set the workouts in the state with the payload
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload  // Replace the current workouts with the new payload
            };

        // When action type is 'CREATE_WORKOUT', add the new workout to the existing state
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]  // Add new workout at the beginning of the array
            };
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            };

        // Default case if the action type doesn't match anything, return the unchanged state
        default:
            return state;
    }
};

// Context provider component to wrap parts of the app that need access to workout state
export const WorkoutsContextProvider = ({ children }) => {
    // Initializing the reducer with the workoutReducer function and initial state
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null  // Initial state has no workouts
    });

    // Providing state and dispatch function to children components via the context provider
    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}  {/* The children are components that will have access to the context */}
        </WorkoutsContext.Provider>
    );
};
