import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { id, text, checked, onRemove, onToggle } = this.props;

        return (
            <li className="todo-item" id={id} onClick={ (e) => {
                e.stopPropagation();
                onToggle(id);
            }}>
                <span className="remove" onClick={ (e) => {
                    e.stopPropagation();
                    onRemove(id);
                }}>&times;</span>
                <span className={` todo-text ${checked ? 'checked' : ''}`}>{ text }</span>
                { checked && <div className="check-mark">checked</div> }
            </li>
        );
    }
}

export default TodoItem;