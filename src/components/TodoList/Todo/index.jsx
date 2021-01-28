import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../../../redux/actions/todo';
import { Space, Button, Dropdown, Menu, Switch } from 'antd';
import { DeleteOutlined, DownOutlined, FormOutlined, CopyOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const Todo = ({todo}) => {
    const dispatch = useDispatch();

    const delTodo = () => {
        dispatch(deleteTodo(todo.id))
    }
    const edTodo = () => {
        dispatch(editTodo(todo))
    }

    const DropdownMenu = (
        <Menu>
            <Menu.Item key='0'>
                <Button onClick={delTodo}>Delete <DeleteOutlined/></Button>
            </Menu.Item>
            <Menu.Item key='1'>
                <Button onClick={edTodo}>Edit <FormOutlined /></Button>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key='3'>
                <CopyToClipboard text={todo.title}>
                    <Button>Copy <CopyOutlined /></Button>
                </ CopyToClipboard>
            </Menu.Item>
        </Menu>
    )


    return (
        <div>
            <Space align='baseline'>
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked={todo.ready}/>
                <p>{todo.title}</p>
                <Dropdown overlay={DropdownMenu}>
                    <a className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                    Hover me <DownOutlined />
                    </a>
                </Dropdown>
            </Space>
        </div>
    )
}