import { ADD_TODO } from "../action/todoAction"

const initialState = {
  data: []
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
     console.log(action.payload)
     
      return {
        data: [...state.data, action.payload]
      }

    default: return state
  }
}

export default todoReducer