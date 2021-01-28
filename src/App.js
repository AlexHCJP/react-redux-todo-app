import React from 'react'
import { Layout, Row, Col } from 'antd';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';


export const App = () => {
    return ( 
        <Layout style={{height:'100%', padding: '10px'}}>
            <Layout.Content >
                <Row gutter={[8, 8]}>
                    <Col xs={{ span: 24 }} sm={{ span: 12}} >
                        <TodoForm/>
                    </Col >
                    <Col xs={{ span: 24 }} sm={{ span: 12}}>
                        <TodoList/>
                    </Col >
                </Row>
            </Layout.Content>
        </Layout>
    )
} 