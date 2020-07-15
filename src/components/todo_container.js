import React, { Component } from 'react';

class Container extends Component {
    render() {
        const { form, list } = this.props;
        return (
            <div className="todo-container">
                <header>
                    <div className="title">Todo List With React CRUD</div>
                </header>
                { form }
                { list }
            </div>
        );
    }
}

export default Container;