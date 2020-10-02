import React, { Fragment } from 'react';


const TodoItem = ({ todo, onRemove }) => {

    return (
        <Fragment>
            <li>{todo.title} | <button onClick={() => onRemove(todo)}>x</button></li>
        </Fragment>
    )


};

export default TodoItem;