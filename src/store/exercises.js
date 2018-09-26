// create workout reducer

// Action Types
const ADD_WORKOUT_EXERSISES = 'ADD_WORKOUT_EXERSISES'
const REMOVE_WORKOUT = 'REMOVE_WORKOUT'
const GET_EXERCISE_BY_MUSCLES = 'GET_EXERCISES_BY_MUSCLES'

// Initial State
const defaultState = [
  {
    id: 'overhead-press',
    title: 'Overhead Press',
    description: 'Delts exercise...',
    muscles: 'shoulders'
  },
  {
    id: 'dips',
    title: 'Dips',
    description: 'Triceps exercise...',
    muscles: 'arms'
  },
  {
    id: 'barbell-curls',
    title: 'Barbell Curls',
    description: 'Biceps exercise...',
    muscles: 'arms'
  },
  {
    id: 'bench-press',
    title: 'Bench Press',
    description: 'Chest exercise...',
    muscles: 'chest'
  },
  {
    id: 'pull-ups',
    title: 'Pull Ups',
    description: 'Back and biceps exercise...',
    muscles: 'back'
  },
  {
    id: 'deadlifts',
    title: 'Deadlifts',
    description: 'Back and leg exercise...',
    muscles: 'back'
  },
  {
    id: 'squats',
    title: 'Squats',
    description: 'Legs exercise...',
    muscles: 'legs'
  }
]

// Muscles
// muscles = [
//   'shoulders','chest','arms','back','legs','core'
// ]

// Base model for exercise object
// exercise = [
//   {
//     id: '',
//     title: '',
//     description: '',
//     muscles: '',

//   }
// ]

// Action Creators
export const addWorkout = workout => ({
  type: ADD_WORKOUT_EXERSISES,
  workout
})

export const removeWorkout = id => ({
  type: REMOVE_WORKOUT,
  id
})

export const getExerciseByMuscles = muscle => ({
  type: GET_EXERCISE_BY_MUSCLES,
  muscle
})

// Thunk Creators

// Reducer

export const exerciseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_WORKOUT_EXERSISES:
      return [...state, action.workout]
    case REMOVE_WORKOUT:
      return state.filter(ex => ex.id !== action.id)
    case GET_EXERCISE_BY_MUSCLES:
     return state
    default:
      return state
  }
}
