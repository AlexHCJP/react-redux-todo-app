import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, updateTodo } from '../../redux/actions/todo'
import { Form, Input, Button } from 'antd'



export const TodoForm = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todo)
    const formRef = useRef(null)
    
    const [form] = Form.useForm();

    React.useEffect(() => {
      form.setFieldsValue({
        title: todo.updateTodo?.title,
      });
    });

    const handleFinish = (val) => {
        if(todo.isCreate){
            dispatch(createTodo(val.title))
        }else {
            dispatch(updateTodo(val.title, todo.updateTodo.id))
        }
        formRef.current.resetFields();
    }
    
    console.log(todo.updateTodo?.title)
    return (
        <Form
        onFinish={handleFinish}
        ref={formRef}
        form={form}>
            <Form.Item 
                name='title'
                rules={[
                    {
                        required: true,
                        message: 'Please input your title!',
                    },
                ]}>
                <Input placeholder='Title'/>
            </Form.Item>
            <Form.Item >
                <Button type='primary' htmlType='submit'>
                    {(todo.isCreate)? 'Create' : 'Update'}
                </Button>
            </Form.Item>
        </Form>
    )
}