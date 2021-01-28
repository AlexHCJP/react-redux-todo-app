import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, EDIT_TODO, CANCEL_UPDATE_TODO } from '../constants/todo';

export function createTodo (title) {
    return {
        type: CREATE_TODO,
        payload: {
            id: new Date().toISOString(),
            title,
            ready: false
        }
    }
}

export function deleteTodo (id) {
    return {
        type: DELETE_TODO,
        payload: { id }
    }
}

export function updateTodo (title, id) {
    return {
        type: UPDATE_TODO,
        payload: {title, id}
    }
}
export function editTodo (todo) {
    return {
        type: EDIT_TODO,
        payload: {todo}
    }
}

export function cancelUpdateTodo () {
    return {
        type: CANCEL_UPDATE_TODO
    }
}