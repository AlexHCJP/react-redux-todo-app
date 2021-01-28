import { DELETE_TODO, CREATE_TODO, UPDATE_TODO, CANCEL_UPDATE_TODO, EDIT_TODO } from '../constants/todo'



const initialState = {
    list: [
        {id: 1, title: 'Hello World!!!', ready: false},
        {id: 2, title: 'Kia Monako', ready: true},
        {id: 3, title: 'NARUTOOOOOO', ready: false}
    ],
    isCreate: true,
    updateTodo: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((val)=> val.id !== action.payload.id)
            }
        case CREATE_TODO:
            return { 
                ...state, 
                list: state.list.concat([action.payload]) 
            }
        case EDIT_TODO:
            return { 
                ...state,
                isCreate: false,
                updateTodo: action.payload.todo
            }
        case UPDATE_TODO:
            return { 
                ...state,
                list: state.list.map((val)=> {
                    if(val.id === action.payload.id){
                        val.title = action.payload.title
                    }
                    return val
                }),
                isCreate: true,
                updateTodo: null
            }
        case CANCEL_UPDATE_TODO:
            return { 
                ...state,
                isCreate: true,
                updateTodo: null
            }
        default: return state
    }
}