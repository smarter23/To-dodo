import React, { Fragment } from 'react';
import TodoItem from '../TodoItem';


const TodoList = ({ todos, onRemove }) => {

    return (
        <Fragment>
            <ul>
                {
                    todos.map((todo, index) => <TodoItem key={index} todo={todo} onRemove={onRemove} />)
                }
            </ul>
        </Fragment>
    )

};

export default TodoList;