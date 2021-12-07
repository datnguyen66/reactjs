import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../component/TodoList';
import queryString from 'query-string';
import TodoForm from '../../component/TodoForm';

ListPage.propTypes = {
    
};

function ListPage(props) {
    const initTodoList = [
        {
            id : 1,
            title : 'Eat',
            status: 'new',
        },
        {
            id : 2,
            title : 'Sleep',
            status: 'completed',
        },
        {
            id : 3,
            title : 'Code',
            status: 'new',
        },
    ]
    const location = useLocation();
    const math = useRouteMatch();
    const history = useHistory();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(()=>{
        const params = queryString.parse(location.search)
        // console.log(params);
        return params.status || 'all';
    });
    useEffect(()=>{
        const params = queryString.parse(location.search)
        // console.log(params);
        setFilteredStatus(params.status || 'all');
    },[location.search])

    const handleTodoClick = (todo, idx) =>{
        const newTodoList = [...todoList];

        console.log(todo, idx);

        // toggle State
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        
        newTodoList[idx] = newTodo;
        // update TodoList 
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        // setFilteredStatus('all');
        const queryParams = {status: 'all'};
        history.push({
            pathName: math.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowCompletedClick = () => {
        // setFilteredStatus('completed');
        const params = {status: 'completed'};
        history.push({
            pathname: math.path,
            search : queryString.stringify(params),
        })
    }
    const handleShowNewClick = () => {
        // setFilteredStatus('new');
        const params = {status:'new'};
        history.push({
            padthName: math.path,
            search: queryString.stringify(params),
        })
    }
    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    console.log(renderedTodoList);

    const handleTodoFormSubmit = (values) =>{
        console.log(values);
        const newTodo = {
            id : todoList.length + 1,
            title : values.title,
            status: 'new',
        };
        const newTodoList = [...todoList, newTodo] 
        setTodoList(newTodoList)

    }
    return (
        <div>
            <h3>todo form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}  />
            <h3>huhu</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;