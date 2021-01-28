import React from 'react'
import { Card } from 'antd'
import { useSelector } from 'react-redux'
import { Todo } from './Todo'

export const TodoList = () => {
    
    const todo = useSelector(state => state.todo )
    return (
        <Card title='Todo List'>
            {todo.list.map((val)=> <Todo key={val.id} todo={val}/>)}
        </Card>
    )
}