import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component {
    render() {
        const { todos, onRemove, onToggle } = this.props;
        const todolist = todos.map( ({ id, text, checked }) => (
            <TodoItem key={id} id={id} text={text} checked={checked} onRemove={onRemove} onToggle={onToggle} />
        ));

        return (
            <ul className="todo-list">
                { todolist }
            </ul>
        );
    }
}

export default TodoList;